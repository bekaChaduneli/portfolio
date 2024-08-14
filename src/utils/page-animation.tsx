import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");

  if (bannerOne && bannerTwo && bannerThree && bannerFour && bannerFive) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
      yPercent: -100,
      duration: 0.5,
      stagger: 0.1,
      onStart: () => {
        document.body.style.cursor = "wait";
      },
      onComplete: () => {
        document.body.style.cursor = "auto";
      },
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");

  if (bannerOne && bannerTwo && bannerThree && bannerFour && bannerFive) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
      yPercent: 0,
      stagger: 0.1,
      duration: 0.5,
      onStart: () => {
        document.body.style.cursor = "wait";
      },
      onComplete: () => {
        router.push(href);
        document.body.style.cursor = "wait";
      },
    });
  }
};
