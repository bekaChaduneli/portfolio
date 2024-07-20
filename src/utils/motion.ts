import gsap from "gsap";
import { Variants } from "framer-motion";

export const LinkedinAnimation = (linkedin: Element) => {
  gsap.fromTo(
    linkedin,
    {
      marginLeft: "160px",
      marginBottom: "100px",
      scaleX: ".0",
      scaleY: ".0",
      opacity: "0%",
    },
    {
      marginLeft: "0px",
      scaleX: "99%",
      scaleY: "99%",
      marginBottom: "0px",
      opacity: "100%",
      duration: 1.1,
      onStart: () => {},
      onComplete: () => {
        linkedin.classList.add("bounce-bottom");
        linkedin.classList.add("delay-700");
      },
    }
  );
};

export const GithubAnimation = (github: Element) => {
  gsap.fromTo(
    github,
    {
      marginRight: "160px",
      scaleX: ".0",
      scaleY: ".0",
      marginBottom: "100px",
      opacity: "0%",
    },
    {
      marginRight: "0px",
      marginBottom: "0px",
      opacity: "100%",
      scaleX: "99%",
      scaleY: "99%",
      duration: 0.7,
      onComplete: () => {
        github.classList.add("bounce-bottom");
        github.classList.add("delay-300");
      },
    }
  );
};

export const BooksAnimation = (books: Element) => {
  gsap.fromTo(
    books,
    {
      marginLeft: "180px",
      marginTop: "100px",
      scaleX: ".0",
      scaleY: ".0",
      opacity: "0%",
    },
    {
      marginLeft: "0px",
      marginTop: "0px",
      scaleX: "99%",
      scaleY: "99%",
      opacity: "100%",
      duration: 0.7,
      onStart: () => {
        books.classList.add("bounce-top");
      },
    }
  );
};

export const SkillsAnimation = (skills: Element) => {
  gsap.fromTo(
    skills,
    {
      width: "0px",
      opacity: "0%",
    },
    {
      opacity: "100%",
      width: "auto",
      duration: 1.1,
    }
  );
};

export const ProfileAnimation = (profile: Element) => {
  gsap.fromTo(
    profile,
    {
      marginRight: "162px",
      marginTop: "70px",
      scaleX: ".0",
      scaleY: ".0",
      opacity: "0%",
    },
    {
      marginRight: "0px",
      marginTop: "0px",
      scaleX: "99%",
      scaleY: "99%",
      opacity: "100%",
      duration: 0.7,
      onComplete: () => {
        profile.classList.add("bounce-top");
        profile.classList.add("delay-1000");
      },
    }
  );
};

type animation = {
  direction: string;
  type: string;
  delay: number;
  duration: number;
};

export const slideIn = ({ direction, type, delay, duration }: animation) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const fadeIn = ({ direction, type, delay, duration }: animation) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
