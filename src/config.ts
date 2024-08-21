import { Pathnames, LocalePrefix } from "next-intl/routing";

export const locales = ["ka", "en"] as const;

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/archive": "/archive",
  "/blog": "/blog",
  "/main": "/main",
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = "always";

export type AppPathnames = keyof typeof pathnames;
