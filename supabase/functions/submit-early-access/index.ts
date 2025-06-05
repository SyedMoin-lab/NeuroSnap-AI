
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EarlyAccessRequest {
  name: string;
  email: string;
  school?: string;
  studyHours?: string;
  subjects?: string;
  challenges?: string;
  goals?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { name, email, school, studyHours, subjects, challenges, goals }: EarlyAccessRequest = await req.json();

    console.log("Processing early access request for:", email);

    // Store the early access request in the database
    const { data, error: dbError } = await supabase
      .from('early_access_requests')
      .insert({
        name,
        email,
        school,
        study_hours: studyHours,
        subjects,
        challenges,
        goals
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }

    console.log("Early access request stored successfully:", data.id);

    // Send welcome email
    const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
      body: { name, email }
    });

    if (emailError) {
      console.error("Email sending error:", emailError);
      // Don't throw here - we still want to return success if database insert worked
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-early-access function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
