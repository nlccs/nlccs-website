// Prepends the Astro base path to any absolute path.
// Works for both subdirectory (GitHub Pages) and root (custom domain) deployments.
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' or '/nlccs-website'
export const url = (path: string) => `${base}${path}`;
