import { Pathnames } from "next-intl/navigation";

export const locales = ["ka", "en"] as const;

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/archive": "/archive",
  "/blog": "/blog",
  "/main": "/main",
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
