-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (to avoid conflicts)
DROP TABLE IF EXISTS public.posts CASCADE;
DROP TABLE IF EXISTS public.leads CASCADE;
DROP TABLE IF EXISTS public.case_studies CASCADE;
DROP TABLE IF EXISTS public.jobs CASCADE;

-- 1. POSTS Table (Blog)
CREATE TABLE public.posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    content JSONB, -- Storing PortableText or structured content
    main_image TEXT,
    author_name TEXT,
    author_image TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. LEADS Table (Contact Form)
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT,
    last_name TEXT,
    email TEXT NOT NULL,
    company_website TEXT,
    status TEXT DEFAULT 'new', -- new, contacted, closed
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CASE STUDIES Table
CREATE TABLE public.case_studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client TEXT NOT NULL,
    project TEXT NOT NULL,
    pull_quote TEXT,
    main_testimonial_video TEXT, -- Wistia ID
    before_video_testimonial TEXT,
    after_video_testimonial TEXT,
    before_video_tutorial TEXT,
    after_video_tutorial TEXT,
    before_video_ad TEXT,
    after_video_ad TEXT,
    gif_title TEXT,
    gif_thumbnail TEXT,
    results JSONB, -- Array of { metric, description, icon_name, color }
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. JOBS Table (Careers)
CREATE TABLE public.jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    type TEXT NOT NULL, -- Full-time, Part-time
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT[], -- Array of strings
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Policies

-- POSTS: Public can read published posts
CREATE POLICY "Public can view posts" 
ON public.posts FOR SELECT 
USING (true);

-- LEADS: Public can insert (submit form), only authenticated users (admins) can view
CREATE POLICY "Public can insert leads" 
ON public.leads FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view leads" 
ON public.leads FOR SELECT 
TO authenticated 
USING (true);

-- CASE STUDIES: Public can view
CREATE POLICY "Public can view case studies" 
ON public.case_studies FOR SELECT 
USING (true);

-- JOBS: Public can view active jobs
CREATE POLICY "Public can view active jobs" 
ON public.jobs FOR SELECT 
USING (is_active = true);

-- Insert Sample Data for Jobs (from CareerPositions.tsx)
INSERT INTO public.jobs (title, type, location, description, requirements) VALUES
(
    'Video Editor',
    'Full-time',
    'Remote',
    'Join our creative team to produce high-quality video content for SaaS companies. Experience with After Effects, Premiere Pro, and motion graphics required.',
    ARRAY[
        '3+ years of video editing experience',
        'Proficiency in Adobe Creative Suite',
        'Motion graphics and animation skills',
        'Portfolio showcasing SaaS/tech content'
    ]
),
(
    'Content Strategist',
    'Part-time',
    'Remote',
    'Help develop content strategies for our clients and create compelling narratives for video projects.',
    ARRAY[
        'Experience in content marketing',
        'Understanding of SaaS industry',
        'Strong writing and storytelling skills',
        'Experience with video content planning'
    ]
);

-- Insert Sample Data for Case Studies (from CaseStudies.tsx)
INSERT INTO public.case_studies (
    client, 
    project, 
    pull_quote, 
    main_testimonial_video,
    before_video_testimonial,
    after_video_testimonial,
    before_video_tutorial,
    after_video_tutorial,
    before_video_ad,
    after_video_ad,
    gif_title,
    gif_thumbnail,
    results
) VALUES (
    'TechFlow Solutions',
    'SaaS Platform Launch Campaign',
    'ContentFarm team is creative, fast and affective.',
    '8gywrfd4p3',
    'uv0619hth3',
    'wuikfu07dd',
    'wuikfu07dd',
    'youtube:RoGfkuUksFg',
    'f0xwww5mdf',
    'c5tw2tz3av',
    'Animated Explainer',
    '/public/lovable-uploads/279b69c3-727e-44b2-8758-b80bef592572.png',
    '[
        {"icon": "BarChart3", "metric": "340%", "description": "Increase in conversions", "color": "text-green-600"},
        {"icon": "Eye", "metric": "2.3M", "description": "Video views generated", "color": "text-blue-600"},
        {"icon": "MousePointer", "metric": "67%", "description": "Trial signup rate", "color": "text-purple-600"},
        {"icon": "DollarSign", "metric": "$127K", "description": "Revenue attributed to videos", "color": "text-emerald-600"},
        {"icon": "Target", "metric": "89%", "description": "Customer retention rate", "color": "text-orange-600"}
    ]'::jsonb
);

-- Insert Sample Data for Posts (Blog)
INSERT INTO public.posts (
    slug,
    title,
    excerpt,
    content,
    main_image,
    author_name,
    published_at
) VALUES (
    'video-marketing-trends-2024',
    'Top Video Marketing Trends for 2024',
    'Discover the key video marketing trends that will dominate the landscape in 2024, from AI-driven content to short-form video dominance.',
    '"<p>Video marketing is evolving rapidly. Here are the top trends for 2024...</p><h2>1. AI-Driven Production</h2><p>Artificial Intelligence is changing how we create videos...</p>"'::jsonb,
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    'Sarah Jenkins',
    NOW()
),
(
    'saas-video-strategy-guide',
    'The Ultimate SaaS Video Strategy Guide',
    'Learn how to build a comprehensive video strategy for your SaaS product that drives user acquisition and retention.',
    '"<p>Creating a video strategy for SaaS requires a deep understanding of your funnel...</p>"'::jsonb,
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    'Mike Ross',
    NOW() - INTERVAL '2 days'
);
