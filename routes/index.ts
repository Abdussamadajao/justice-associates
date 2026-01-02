export const ROOT = "/";
export const AUTH_ROOT = "/auth";
export const PRACTICE_AREAS_ROOT = "/practice-areas";
function paths(root: string, route: string) {
  return `${root}${route}`;
}
export const PATHS = {
  root: ROOT,
  practiceAreas: PRACTICE_AREAS_ROOT,
  contact: "/contact",
  termsOfService: "/terms-of-service",
  privacyPolicy: "/privacy-policy",
  legalDisclaimer: "/legal-disclaimer",
  singlePracticeArea: (slug: string) => paths(PRACTICE_AREAS_ROOT, `/${slug}`),
};
