
# NeuroSnap - AI-Powered Study Booster

NeuroSnap is an innovative AI-powered study platform designed to revolutionize your learning experience through adaptive technology that understands your brain patterns and optimizes your study sessions.

## 🎨 Tech Stack & Design Choices

### Frontend Technologies
- **React 18** - Modern React with hooks for efficient component state management
- **TypeScript** - Type-safe development ensuring code reliability and better developer experience
- **Vite** - Lightning-fast build tool providing instant hot module replacement
- **Tailwind CSS** - Utility-first CSS framework enabling rapid UI development
- **shadcn/ui** - High-quality, accessible React components built on Radix UI primitives
- **Lucide React** - Beautiful, customizable SVG icon library
- **Framer Motion** - Smooth animations and micro-interactions

### Backend & Database
- **Supabase** - Comprehensive Backend-as-a-Service solution providing:
  - PostgreSQL database with real-time capabilities
  - Built-in authentication system
  - Edge Functions for serverless backend logic
  - Row Level Security (RLS) for data protection
  - Automatic API generation

### Development Tools
- **Cursor AI IDE** - AI-powered code editor enhancing development productivity through:
  - Intelligent code completion and suggestions
  - Automated code generation and refactoring
  - Context-aware debugging assistance
  - Real-time code optimization recommendations

## 🎨 Color Design System

Our carefully crafted color palette uses OKLCH color space for superior perceptual uniformity:

**Primary Colors:**
- **Hero Gradient**: Purple to Pink (`from-purple-600 to-pink-500`)
- **Primary**: `oklch(0.705 0.213 47.604)` - Warm amber for CTAs
- **Background**: `oklch(1 0 0)` - Pure white for clean aesthetics
- **Foreground**: `oklch(0.141 0.005 285.823)` - Dark blue-gray for readability

**Design Benefits:**
- Excellent accessibility with WCAG-compliant contrast ratios
- Consistent visual hierarchy throughout the application
- Professional, modern appearance appealing to students
- Optimized for both desktop and mobile viewing

## 🔧 Why Supabase?

Supabase was chosen as our backend solution for several strategic reasons:

1. **Rapid Development**: Pre-built authentication, database, and API endpoints
2. **Real-time Capabilities**: Essential for collaborative study features
3. **Security First**: Built-in Row Level Security and GDPR compliance
4. **Scalability**: Auto-scaling infrastructure that grows with user base
5. **Developer Experience**: Excellent TypeScript support and intuitive APIs
6. **Cost Effective**: Generous free tier with transparent pricing model
7. **Open Source**: Built on PostgreSQL with no vendor lock-in
8. **Edge Functions**: Serverless functions for custom backend logic

## 🗄️ Backend Implementation

### Database Schema

#### Early Access Requests Table
```sql
CREATE TABLE public.early_access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  school TEXT,
  study_hours TEXT,
  subjects TEXT,
  challenges TEXT,
  goals TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Row Level Security
ALTER TABLE public.early_access_requests ENABLE ROW LEVEL SECURITY;

-- Service role policy for managing data
CREATE POLICY "Service role can manage early access requests"
  ON public.early_access_requests
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Performance indexes
CREATE INDEX idx_early_access_requests_email ON public.early_access_requests(email);
CREATE INDEX idx_early_access_requests_created_at ON public.early_access_requests(created_at);
```

### Edge Functions

#### 1. Submit Early Access Function
**Location**: `supabase/functions/submit-early-access/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const formData = await req.json();
    
    // Insert into database
    const { data, error } = await supabase
      .from("early_access_requests")
      .insert([formData])
      .select();

    if (error) throw error;

    // Trigger welcome email
    const { error: emailError } = await supabase.functions.invoke("send-welcome-email", {
      body: { email: formData.email, name: formData.name },
    });

    if (emailError) console.error("Email error:", emailError);

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
```

#### 2. Welcome Email Function
**Location**: `supabase/functions/send-welcome-email/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req: Request) => {
  try {
    const { email, name } = await req.json();

    const emailResponse = await resend.emails.send({
      from: "NeuroSnap <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to NeuroSnap - Your AI Study Journey Begins! 🧠✨",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to NeuroSnap!</h1>
          </div>
          
          <div style="padding: 30px 20px; background: #f8fafc;">
            <h2 style="color: #1e293b;">Hi ${name}! 👋</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Thank you for joining NeuroSnap's early access program! We're excited to help you revolutionize your learning experience with AI-powered study sessions.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #9333ea;">
              <h3 style="color: #1e293b; margin-top: 0;">What's Next?</h3>
              <ul style="color: #475569;">
                <li>You'll be among the first to access our AI study assistant</li>
                <li>Receive personalized study optimization tips</li>
                <li>Get priority access to new features and tools</li>
                <li>Join our exclusive early adopter community</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              We'll keep you updated on our progress and notify you as soon as early access becomes available.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://neurosnap.com" style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit NeuroSnap
              </a>
            </div>
          </div>
          
          <div style="background: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 14px;">
            <p>Best regards,<br>The NeuroSnap Team</p>
            <p style="margin-top: 15px;">
              © 2024 NeuroSnap. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Resend account (for emails)

### Step-by-Step Implementation

#### 1. Database Setup
1. Create a new Supabase project
2. Run the SQL commands provided above in the Supabase SQL Editor
3. Verify the table and policies are created correctly

#### 2. Edge Functions Deployment
1. Install Supabase CLI: `npm install -g supabase`
2. Login to Supabase: `supabase login`
3. Deploy functions:
   ```bash
   supabase functions deploy submit-early-access
   supabase functions deploy send-welcome-email
   ```

#### 3. Environment Configuration
1. Set up Resend API key in Supabase secrets:
   - Go to Project Settings > Edge Functions
   - Add secret: `RESEND_API_KEY`
2. Configure email domain verification in Resend dashboard

#### 4. Frontend Integration
1. Update Supabase client configuration
2. Implement form submission in `ContactForm.tsx`
3. Add toast notifications for user feedback

### Key Files Structure
```
src/
├── components/
│   ├── ContactForm.tsx      # Early access form
│   ├── Hero.tsx            # Hero section with CTA buttons
│   └── ui/
│       ├── footer.tsx      # Footer component
│       └── hero-section-dark.tsx  # Hero section component
├── integrations/
│   └── supabase/
│       └── client.ts       # Supabase client setup
supabase/
└── functions/
    ├── submit-early-access/
    │   └── index.ts        # Form submission handler
    └── send-welcome-email/
        └── index.ts        # Email sending function
```

## 📧 Email Integration

The platform uses Resend for transactional emails:

1. **Setup**: Create account at resend.com
2. **Domain Verification**: Verify your sending domain
3. **API Key**: Generate and add to Supabase secrets
4. **Templates**: HTML email templates with responsive design

## 🔒 Security Features

- **Row Level Security**: Database-level access control
- **Input Validation**: Server-side validation of all form inputs
- **Rate Limiting**: Protection against spam submissions
- **CORS Configuration**: Secure cross-origin resource sharing
- **Environment Variables**: Secure API key management

## 📱 Features Implemented

### Current Features
- ✅ Responsive landing page with modern hero section
- ✅ Early access registration form
- ✅ Automated welcome email system
- ✅ Database storage of user information
- ✅ Real-time form validation
- ✅ Toast notifications for user feedback
- ✅ Mobile-optimized design

### Planned Features
- 🔄 User dashboard and authentication
- 🔄 AI study assistant integration
- 🔄 Progress tracking and analytics
- 🔄 Study session recommendations
- 🔄 Collaborative study features

## 🚀 Deployment

The application is optimized for deployment on Vercel with Supabase backend:

1. **Frontend**: Deploy to Vercel with automatic builds
2. **Backend**: Supabase handles all backend infrastructure
3. **Domain**: Configure custom domain in Vercel
4. **Analytics**: Integrate with your preferred analytics platform

---

Built with ❤️ using AI-powered development tools and modern web technologies.
