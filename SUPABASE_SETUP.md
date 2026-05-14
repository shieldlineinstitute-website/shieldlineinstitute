# Supabase Integration Setup Guide

## Overview
This project integrates with Supabase to manage FAQ and Blog content dynamically. All content is stored in editable tables, allowing you to add and modify content without redeploying.

## Environment Setup ✓
The `.env.local` file has already been created with your Supabase credentials:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

**Important:** Never commit `.env.local` to version control (it's in `.gitignore`).

## Creating Supabase Tables

### 1. FAQs Table

Go to your Supabase dashboard and run this SQL in the SQL Editor:

```sql
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  heading TEXT NOT NULL,
  body TEXT NOT NULL,
  subheading TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS if you want to restrict access
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Create a policy allowing anonymous read access
CREATE POLICY "Allow anonymous read access" ON faqs
  FOR SELECT
  TO anon
  USING (true);

-- Insert initial FAQ data
INSERT INTO faqs (heading, body, subheading) VALUES
  ('How do I book a training program?', 'Visit the contact page, send us a message, or call our number to reserve your training slot.', NULL),
  ('Can I combine medical audit with driving lessons?', 'Yes, our programs are designed to include medical safety screening before practical driving begins.', NULL),
  ('What documents do I need for license support?', 'We will guide you through the required FRSC documents, including identification, medical forms, and application materials.', NULL);
```

### 2. Blog Posts Table

```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  heading TEXT NOT NULL,
  body TEXT NOT NULL,
  category TEXT,
  subheading TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS if you want to restrict access
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create a policy allowing anonymous read access
CREATE POLICY "Allow anonymous read access" ON blog_posts
  FOR SELECT
  TO anon
  USING (true);

-- Insert initial blog post data
INSERT INTO blog_posts (heading, body, category) VALUES
  ('Top defensive driving habits for Lagos roads', 'Learn the best habits for staying calm, aware, and prepared for common road conditions in Lagos.', 'Safety Tip'),
  ('Why health checks matter before you drive', 'Understand how vision, blood pressure, and fitness impact your ability to make safe decisions on the road.', 'Medical Advice'),
  ('Preparing for your first training session', 'Get ready with simple steps that make your first lessons smoother and more productive.', 'Guidance');
```

## Project Structure

### New Files Created

- **`.env.local`** - Environment variables (git ignored)
- **`src/lib/supabaseClient.ts`** - Supabase client initialization
- **`src/hooks/useFAQs.ts`** - React hook to fetch FAQs from Supabase
- **`src/hooks/useBlogPosts.ts`** - React hook to fetch blog posts from Supabase
- **`src/pages/FAQ.tsx`** - Updated FAQ page (now fetches from Supabase)
- **`src/pages/Blog.tsx`** - Updated Blog page (now fetches from Supabase)

### Updated Files

- **`src/components/PageShell.tsx`** - Modified to support both legacy and Supabase data formats

## How It Works

### FAQ Page (`src/pages/FAQ.tsx`)
```typescript
const { faqs, loading, error } = useFAQs();
```
- Fetches all FAQs from the `faqs` table
- Displays loading state while fetching
- Shows error message if fetch fails
- Falls back to hardcoded content if table is empty

### Blog Page (`src/pages/Blog.tsx`)
```typescript
const { posts, loading, error } = useBlogPosts();
```
- Fetches up to 3 latest blog posts from the `blog_posts` table
- Orders by `created_at` in descending order (newest first)
- Displays loading state while fetching
- Shows error message if fetch fails
- Falls back to hardcoded content if table is empty

## Adding/Editing Content

### Add a New FAQ:
In Supabase Dashboard → `faqs` table → "New row"
- **heading**: The question
- **body**: The answer
- **subheading**: (optional) Additional context

### Add a New Blog Post:
In Supabase Dashboard → `blog_posts` table → "New row"
- **heading**: Article title
- **body**: Article content
- **category**: (optional) Category tag (e.g., "Safety Tip", "Medical Advice")
- **subheading**: (optional) Subtitle

Changes appear on your website immediately without redeployment!

## Development

### Start the dev server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

## RLS (Row Level Security) Notes

By default, RLS is disabled but I've included the setup. If you enable RLS:
- The anon (unauthenticated) user can read all content
- You can add additional policies for authenticated users to create/edit content via admin panel

## Troubleshooting

### "Missing Supabase environment variables"
- Verify `.env.local` file exists in the project root
- Ensure both `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are set
- Restart the dev server after updating `.env.local`

### No content appears
- Check if you've created and populated the tables in Supabase
- Check browser console for error messages
- Verify RLS policies allow public read access (if enabled)

### Content not updating
- Clear browser cache
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Check that the content was saved in Supabase Dashboard

## Security Considerations

- ⚠️ **Never commit `.env.local`** to version control
- The current setup allows public read-only access (appropriate for FAQ/Blog)
- For admin editing, implement authentication and row-level security policies
- In production, consider adding authentication for content management
