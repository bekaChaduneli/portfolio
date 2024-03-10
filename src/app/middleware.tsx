import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

export function middleware(request: any) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/en",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(ka|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
