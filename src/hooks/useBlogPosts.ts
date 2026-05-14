import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface BlogPost {
  id?: string;
  heading: string;
  subheading?: string;
  body: string;
  category?: string;
  created_at?: string;
  updated_at?: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;
        
        setPosts(data || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return { posts, loading, error };
};
