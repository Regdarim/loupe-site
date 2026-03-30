import type { SanityImageSource } from '../types/siteContent';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = '2024-01-01';

export const isSanityConfigured = Boolean(projectId && dataset);

const queryEndpoint = isSanityConfigured
  ? `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`
  : null;

export async function fetchSanityQuery<T>(query: string): Promise<T | null> {
  if (!queryEndpoint) {
    return null;
  }

  const requestUrl = `${queryEndpoint}?query=${encodeURIComponent(query)}`;
  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error(`Sanity query failed with status ${response.status}`);
  }

  const payload = (await response.json()) as { result: T | null };
  return payload.result;
}

function imageRefToUrl(ref: string): string | null {
  if (!isSanityConfigured || !projectId || !dataset || !ref.startsWith('image-')) {
    return null;
  }

  const parts = ref.split('-');
  if (parts.length < 4) {
    return null;
  }

  const assetId = parts[1];
  const dimensions = parts[2];
  const format = parts[3];

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${dimensions}.${format}`;
}

export function resolveSanityImageUrl(source: SanityImageSource, fallback: string): string {
  if (!source) {
    return fallback;
  }

  if (typeof source === 'string') {
    return source;
  }

  if (source.asset?.url) {
    return source.asset.url;
  }

  if (source.asset?._ref) {
    const assetUrl = imageRefToUrl(source.asset._ref);
    if (assetUrl) {
      return assetUrl;
    }
  }

  return fallback;
}
