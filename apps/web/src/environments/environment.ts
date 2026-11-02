// Override through the Angular build's define option. This value is public.
declare const ZANDO_API_URL: string;

export const environment = {
  apiUrl: (typeof ZANDO_API_URL === 'undefined' ? '/api' : ZANDO_API_URL).replace(/\/$/, '')
};
