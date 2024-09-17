"use client";
import { animatePageIn } from "@/utils/page-animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();

    (function (d: Document, t: string) {
      const BASE_URL = "https://app.chatwoot.com";
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];

      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;

      if (s?.parentNode) {
        s.parentNode.insertBefore(g, s);
      }

      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "njrbmeGxbymze4dVorUbp6Hb",
          baseUrl: BASE_URL,
        });

        const chatButton = document.querySelector(
          ".chatwoot-widget"
        ) as HTMLElement;
        if (chatButton) {
          chatButton.style.zIndex = "1";
        }
      };
    })(document, "script");
  }, []);

  return (
    <div className="relative">
      <div
        id="banner-1"
        className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-0 w-[20%]"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[20%] w-[20%]"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[40%] w-[20%]"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[60%] w-[20%]"
      />
      <div
        id="banner-5"
        className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[80%] w-[20%]"
      />
      {children}
    </div>
  );
}
