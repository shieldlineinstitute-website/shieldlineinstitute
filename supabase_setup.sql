-- Shieldline Institute Supabase Setup Script
-- Run this in the SQL Editor of your Supabase Dashboard

-- ============================================
-- CREATE FAQS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  heading TEXT NOT NULL,
  body TEXT NOT NULL,
  subheading TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Create a policy allowing anonymous read access
CREATE POLICY "Allow anonymous read access on FAQs" ON faqs
  FOR SELECT
  TO anon
  USING (true);

-- Create a policy for authenticated users to manage FAQs (if needed)
CREATE POLICY "Allow authenticated users to manage FAQs" ON faqs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================
-- CREATE BLOG_POSTS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  heading TEXT NOT NULL,
  body TEXT NOT NULL,
  category TEXT,
  subheading TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create a policy allowing anonymous read access
CREATE POLICY "Allow anonymous read access on blog_posts" ON blog_posts
  FOR SELECT
  TO anon
  USING (true);

-- Create a policy for authenticated users to manage blog posts (if needed)
CREATE POLICY "Allow authenticated users to manage blog_posts" ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================
-- INSERT INITIAL DATA
-- ============================================

-- Insert initial FAQs
INSERT INTO faqs (heading, body, subheading) VALUES
  (
    'How do I book a training program?',
    'Visit the contact page, send us a message, or call our number to reserve your training slot.',
    NULL
  ),
  (
    'Can I combine medical audit with driving lessons?',
    'Yes, our programs are designed to include medical safety screening before practical driving begins.',
    NULL
  ),
  (
    'What documents do I need for license support?',
    'We will guide you through the required FRSC documents, including identification, medical forms, and application materials.',
    NULL
  );

-- Insert initial blog posts
INSERT INTO blog_posts (heading, body, category, subheading) VALUES
  (
    'Top defensive driving habits for Lagos roads',
    'Learn the best habits for staying calm, aware, and prepared for common road conditions in Lagos.',
    'Safety Tip',
    NULL
  ),
  (
    'Why health checks matter before you drive',
    'Understand how vision, blood pressure, and fitness impact your ability to make safe decisions on the road.',
    'Medical Advice',
    NULL
  ),
  (
    'Preparing for your first training session',
    'Get ready with simple steps that make your first lessons smoother and more productive.',
    'Guidance',
    NULL
  );

-- ============================================
-- VERIFICATION (Optional - check if data was inserted)
-- ============================================

SELECT 'FAQs Table' as table_name, COUNT(*) as row_count FROM faqs
UNION ALL
SELECT 'Blog Posts Table' as table_name, COUNT(*) as row_count FROM blog_posts;
