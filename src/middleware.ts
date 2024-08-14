import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";

export default createMiddleware({
  defaultLocale: "ka",
  locales,
  pathnames,
  localePrefix,
  localeDetection: false,
});

export const config = {
  matcher: ["/ka", "/(ka|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
