import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["ka", "en"],
    defaultLocale: "ka",
});

export const config = {
    matcher: ["/", "/(en|ka)/:path*"],
};
