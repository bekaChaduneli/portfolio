"use client";
import Image from "next/image";
import React from "react";
import NavigationLink from "./Navbar/NavigationLink";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Facebook, Linkedin, LucideGithub } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const b = useTranslations("Navbar");
  const t = useTranslations("Footer");
  const fadeInVariants = fadeIn({
    direction: "up",
    type: "tween",
    delay: 0,
    duration: 1.5,
  });
  return (
    <motion.footer
      variants={fadeInVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative pb-[20px] px-[20px] sm:px-[30px] lg:px-[40px] lg:mx-[20px] text-white flex justify-center"
    >
      <div className="max-w-[1200px] w-full">
        <div className="w-full flex justify-between lg:border-b-[1px] border-primary dark:border-secondary duration-300 transition-all lg:pb-[24px]">
          <NavigationLink
            href="/"
            className="cursor-pointer group flex gap-[8px] lg:gap-[12px] items-center"
          >
            <Image
              className="w-[48px] group-hover:scale-[85%] transition duration-200 h-[48px] border-[2px] sm:w-[54px] sm:h-[54px] md:w-[58px] md:h-[58px] sm:border-[3px] border-[#283D8B] dark:border-secondary rounded-full"
              src="/profile.jpg"
              alt="profile"
              width={650}
              height={650}
            />
            <div className="text-start">
              <h3
                className={cn(
                  "font-extrabold text-[16px] sm:text-[18px] md:text-[20px] text-primary dark:text-secondary font-geom leading-[100%]",
                  locale === "ka" && "leading-[140%]"
                )}
              >
                {t("Name")}
              </h3>
              <h3
                className={cn(
                  "font-medium text-[14px] sm:text-[15.5px] md:text-[17.2px] text-primary dark:text-secondary",
                  locale === "ka" &&
                    "text-[13px] sm:text-[14.4px] md:text-[16px]"
                )}
              >
                {t("Work")}
              </h3>
            </div>
          </NavigationLink>
          <div className="hidden lg:flex gap-[20px] items-center">
            <NavigationLink
              className={cn(
                "text-[18px]  text-primary dark:text-secondary opacity-50 hover:opacity-100 hover:underline transition-all duration-300",
                pathname === `/${locale}` && "opacity-100 underline"
              )}
              href="/"
            >
              {b("home")}
            </NavigationLink>
            <NavigationLink
              className={cn(
                "text-[18px]  text-primary dark:text-secondary opacity-50 hover:opacity-100 hover:underline transition-all duration-300",
                pathname === `/${locale}/about` && "opacity-100 underline"
              )}
              href="/about"
            >
              {b("about")}
            </NavigationLink>
            <NavigationLink
              className={cn(
                "text-[18px]  text-primary dark:text-secondary opacity-50 hover:opacity-100 hover:underline transition-all duration-300",
                pathname === `/${locale}/main` && "opacity-100 underline"
              )}
              href="/main"
            >
              {b("projects")}
            </NavigationLink>
            <NavigationLink
              className={cn(
                "text-[18px]  text-primary dark:text-secondary opacity-50 hover:opacity-100 hover:underline transition-all duration-300",
                pathname === `/${locale}/blog` && "opacity-100 underline"
              )}
              href="/blog"
            >
              {b("blog")}
            </NavigationLink>
          </div>
          <div className="flex lg:hidden gap-[20px] items-center">
            <Link
              className="group cursor-pointer"
              href="https://github.com/bekaChaduneli"
              target="_blank"
            >
              <LucideGithub className="w-[26px] h-[26px] text-primary dark:text-secondary transition-all duration-300 group-hover:scale-[124%]" />
            </Link>
            <Link
              className="group cursor-pointer"
              href="https://linkedin.com/in/beka-chaduneli-28203422b/"
              target="_blank"
            >
              <Linkedin className="w-[26px] h-[26px] text-primary dark:text-secondary transition-all duration-300 group-hover:scale-[124%]" />
            </Link>
            <Link
              className="group cursor-pointer"
              href="https://www.facebook.com/chadunelibb/"
              target="_blank"
            >
              <Facebook className="w-[26px] h-[26px] text-primary dark:text-secondary transition-all duration-300 group-hover:scale-[124%]" />
            </Link>
          </div>
        </div>
        <div className="pt-[24px] hidden lg:flex justify-between duration-300 transition-all">
          <h1 className="text-[18px] text-primary dark:text-secondary font-graphik font-semibold">
            {t("take-a-look")}
          </h1>
          <div className="flex gap-[20px] items-center">
            <Link
              className="group cursor-pointer"
              href="https://github.com/bekaChaduneli"
              target="_blank"
            >
              <LucideGithub className="w-[26px] h-[26px] text-primary dark:text-secondary transition-all duration-300 group-hover:scale-[124%]" />
            </Link>
            <Link
              className="group cursor-pointer"
              href="https://linkedin.com/in/beka-chaduneli-28203422b/"
              target="_blank"
            >
              <Linkedin className="w-[26px] h-[26px] text-primary dark:text-secondary transition-all duration-300 group-hover:scale-[124%]" />
            </Link>
            <Link
              className="group cursor-pointer"
              href="https://www.facebook.com/chadunelibb/"
              target="_blank"
            >
              <Facebook className="w-[26px] h-[26px] text-primary dark:text-secondary transition-all duration-300 group-hover:scale-[124%]" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
