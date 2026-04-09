/** Base URL segment for this demo — swap branding in `content.ts` */
export const LAW_FIRM_BASE = "/lawyer-demo" as const;

export const SITE_ORIGIN = "https://launchsitedemo.com";

export function lawFirmUrl(path = ""): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${LAW_FIRM_BASE}${p === "//" ? "" : p}`;
}
