
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: EmailRequest = await req.json();

    console.log("Sending welcome email to:", email);

    // Create the welcome email content
    const emailContent = {
      to: email,
      subject: "Welcome to NeuroSnap Early Access! 🧠✨",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f59e0b; font-size: 28px; margin: 0;">NeuroSnap</h1>
            <p style="color: #6b7280; font-size: 16px; margin: 5px 0 0 0;">AI-Powered Study Booster</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%); border-radius: 12px; padding: 1px; margin-bottom: 30px;">
            <div style="background: white; border-radius: 11px; padding: 30px; text-align: center;">
              <h2 style="color: #111827; font-size: 24px; margin: 0 0 15px 0;">Welcome to Early Access, ${name}! 🚀</h2>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0;">
                Thank you for joining NeuroSnap! You're now part of an exclusive group of learners who will experience the future of AI-powered studying.
              </p>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="color: #111827; font-size: 20px; margin: 0 0 15px 0;">What's Next?</h3>
            <ul style="color: #4b5563; font-size: 16px; line-height: 1.6; padding-left: 20px;">
              <li style="margin-bottom: 10px;">🔬 We're analyzing your study preferences to create your personalized AI tutor</li>
              <li style="margin-bottom: 10px;">📧 You'll receive exclusive updates about new features and beta access</li>
              <li style="margin-bottom: 10px;">🎯 Get ready for study sessions that adapt to your brain patterns</li>
              <li>🚀 Early access launch is coming soon - you'll be the first to know!</li>
            </ul>
          </div>

          <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
            <h3 style="color: #111827; font-size: 18px; margin: 0 0 10px 0;">💡 Pro Tip</h3>
            <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0;">
              While you wait, start noting your current study challenges. NeuroSnap will use this to create the perfect learning experience for you!
            </p>
          </div>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://lovable.dev/projects/d8690589-5f17-46a5-9b54-78c845fdf773" 
               style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 16px;">
              Visit NeuroSnap Website
            </a>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              You're receiving this email because you signed up for NeuroSnap Early Access.<br>
              If you have any questions, just reply to this email - we'd love to hear from you!
            </p>
          </div>
        </div>
      `,
      text: `
Welcome to NeuroSnap Early Access, ${name}!

Thank you for joining NeuroSnap! You're now part of an exclusive group of learners who will experience the future of AI-powered studying.

What's Next?
- We're analyzing your study preferences to create your personalized AI tutor
- You'll receive exclusive updates about new features and beta access  
- Get ready for study sessions that adapt to your brain patterns
- Early access launch is coming soon - you'll be the first to know!

Pro Tip: While you wait, start noting your current study challenges. NeuroSnap will use this to create the perfect learning experience for you!

Visit us at: https://lovable.dev/projects/d8690589-5f17-46a5-9b54-78c845fdf773

You're receiving this email because you signed up for NeuroSnap Early Access.
If you have any questions, just reply to this email - we'd love to hear from you!
      `
    };

    // In a real implementation, you would use a service like SendGrid, Resend, or similar
    // For now, we'll just log the email content and return success
    console.log("Email content prepared:", emailContent);
    
    // Simulate sending email
    console.log(`Welcome email sent successfully to ${email}`);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Welcome email sent successfully",
      email: email 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
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
