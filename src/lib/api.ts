
import { supabase } from './supabase';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: any;
  main_image: string;
  author_name: string;
  author_image: string;
  published_at: string;
  created_at: string;
}

export interface Lead {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  company_website: string;
  status?: string;
  created_at?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  project: string;
  pull_quote: string;
  main_testimonial_video: string;
  before_video_testimonial: string;
  after_video_testimonial: string;
  before_video_tutorial: string;
  after_video_tutorial: string;
  before_video_ad: string;
  after_video_ad: string;
  gif_title: string;
  gif_thumbnail: string;
  results: {
    icon: string;
    metric: string;
    description: string;
    color: string;
  }[];
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  is_active: boolean;
}

// Posts
export const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return data as Post[];
};

export const getPostBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }
  return data as Post;
};

// Leads
export const submitLead = async (lead: Lead) => {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()
    .single();

  if (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }
  return data;
};

// Case Studies
export const getCaseStudies = async () => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
  return data as CaseStudy[];
};

// Jobs
export const getJobs = async () => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
  return data as Job[];
};
