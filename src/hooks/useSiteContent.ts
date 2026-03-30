import { useEffect, useState } from 'react';
import { fetchSanityQuery, isSanityConfigured } from '../lib/sanity';
import type { SiteContent } from '../types/siteContent';

const siteContentQuery = `*[_type == "siteContent"][0]{
  heroHeadline,
  heroSubtext,
  introHeading,
  introText,
  realizacjeItems,
  approachSection1Title,
  approachSection1Text,
  approachSection2Title,
  approachSection2Text,
  ctaText,
  menuItems,
  images
}`;

interface UseSiteContentResult {
  siteContent: Partial<SiteContent> | null;
  isLoading: boolean;
  error: string | null;
}

export function useSiteContent(): UseSiteContentResult {
  const [siteContent, setSiteContent] = useState<Partial<SiteContent> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadSiteContent() {
      if (!isSanityConfigured) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await fetchSanityQuery<Partial<SiteContent>>(siteContentQuery);
        if (!isCancelled) {
          setSiteContent(data ?? null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load site content');
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadSiteContent();

    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    siteContent,
    isLoading,
    error,
  };
}
