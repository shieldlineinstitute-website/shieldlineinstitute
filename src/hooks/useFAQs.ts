import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface FAQ {
  id?: string;
  heading: string;
  subheading?: string;
  body: string;
  created_at?: string;
  updated_at?: string;
}

export const useFAQs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('faqs')
          .select('*')
          .order('created_at', { ascending: true });

        if (fetchError) throw fetchError;
        
        setFaqs(data || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch FAQs');
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return { faqs, loading, error };
};
