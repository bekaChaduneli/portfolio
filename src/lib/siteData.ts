export const navigationLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "main",
    path: "/main",
  },
  {
    name: "archive",
    path: "/archive",
  },
  // {
  //   name: "blog",
  //   path: "/blog",
  // },
] as const;

export const skills = [
  "skills:",
  "next",
  "nest",
  "cypress",
  "typescript",
  "node",
  "react",
  "python",
  "javascript",
  "express",
  "django",
  "mongoDB",
  "prisma",
  "graphQL",
  "AWS",
  "linux",
  "jest",
  "fireBase",
  "framer",
  "docker",
  "jenkins",
  "gsap",
  "redux",
  "postgreSql",
  "mySql",
  "tailwind",
  "sass",
  "chakra UI",
  "styled components",
  "redis",
  "webpack",
  "babel",
  "git",
  "mocha",
  "bash",
  "sqlLite",
  "html",
  "css",
  "adobe XD",
  "figma",
];

export const laptopWrapperVariant = {
  hidden: {
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  active: {
    scale: [1, 0],
    transition: {
      duration: 0.4,
      times: [0, 1],
    },
  },
};

export const laptopVariants = (isDesktop: boolean) => ({
  hidden: {
    x: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    x: isDesktop ? [170, 170, 0] : [108, 108, 0],
    scale: 1,
    transition: {
      x: {
        duration: 1.2,
        times: [0, 0.3, 1],
      },
      scale: {
        duration: 0.6,
      },
    },
  },
  active: {
    x: isDesktop ? [0, 170, 170] : [0, 108, 108],
    scale: [1, 1, 0],
    transition: {
      x: {
        duration: 0.6,
        times: [0, 0.5, 1],
      },
      scale: {
        duration: 0.5,
        times: [0, 0.66, 1],
      },
    },
  },
});

export const textVariants = (isDesktop: boolean) => ({
  hidden: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    x: isDesktop ? [-214, 0] : [-140, 0],
    opacity: 1,
    scale: [0.5, 1],
    transition: {
      x: {
        delay: 0.4,
        duration: 0.6,
      },
      opacity: {
        delay: 0.4,
        duration: 0.6,
      },
      scale: {
        delay: 0.4,
        duration: 0.5,
        times: [0, 1],
      },
    },
  },
  active: {
    x: isDesktop ? [0, -314] : [0, -140],
    scale: 0,
    transition: {
      x: {
        duration: 0.5,
      },
      scale: {
        delay: 0.4,
        duration: 0.5,
        times: [1, 0],
      },
    },
  },
});

export const months = [
  "იან",
  "თებ",
  "მარ",
  "აპრ",
  "მაი",
  "ივნ",
  "ივლ",
  "აგვ",
  "სექ",
  "ოქტ",
  "ნოე",
  "დეკ",
];
