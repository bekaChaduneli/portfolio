"use client";

import classNames from "classnames";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MaskText } from "./animations/MaskText";
import { useInView } from "react-intersection-observer";
import InfinityText from "./animations/InfinityText";
import useCursorStore from "@/store/use-cursor-store";

export default function Header() {
  const { t } = useTranslation();
  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");
  const { setIsCursorActive, setCursorBackground, setCursorText } =
    useCursorStore();
  const [scrollHover, setScrollHover] = useState(false);

  useEffect(() => {
    const profile = document.querySelector("#profile");
    const books = document.querySelector("#books");
    const linkedin = document.querySelector("#linkedin");
    const github = document.querySelector("#github");
    const skills = document.querySelector("#skills");

    if (linkedin && profile && books && github && skills) {
      setTimeout(() => {
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
      }, 770);

      setTimeout(() => {
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
      }, 370);

      setTimeout(() => {
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
      }, 670);
      setTimeout(() => {
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
      }, 800);
      setTimeout(() => {
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
      }, 620);
    }
  }, []);
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const scrollBottom = () => {
    const targetScroll = 660;
    console.log(targetScroll);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[80px] sm:mt-[90px] md:mt-[100px] lg:mt-[144px] xl:mt-[160px] flex items-center justify-center z-[0]">
      <div className="relative flex flex-col gap-[8px] py-[20px] md:py-[40px] lg:py-[110px] lg:w-[954px] xl:w-[1200px] justify-center items-center">
        <div
          className={classNames(
            "hidden transition-all h-full w-full !duration-[2s] lg:block absolute z-[0]",
            {
              "opacity-[75%] scale-[96%]": scrollHover,
              "opacity-[100%] scale-[100%]": !scrollHover,
            }
          )}
        >
          <span
            id="profile"
            className="w-[110px] h-[110px] top-0 absolute lg:right-[44px] xl:right-[82px] opacity-0 rotate-[-6deg] cursor-pointer group"
          >
            <svg
              className="absolute z-[0] w-[90px] h-[100px] rotate-[20deg] translate-x-[48px] translate-y-[-28px] xl:translate-x-[64px] scale-[70%] xl:scale-[80%]"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 640 800"
            >
              <defs>
                <marker
                  markerWidth="5"
                  markerHeight="5"
                  refX="2.5"
                  refY="2.5"
                  viewBox="0 0 5 5"
                  orient="auto"
                  id="SvgjsMarker2588"
                >
                  <polygon
                    points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                    className="fill-[#203277] dark:fill-[#a9baff]"
                  />
                </marker>
              </defs>
              <g
                className="transition-all duration-300 opacity-0 group-hover:opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
                stroke-width="22"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="rotate(204, 320, 400)"
                stroke-dasharray="41.5 46"
              >
                <path
                  d="M107.2482681274414 115.49057006835938Q-154.7517318725586 892.4905700683594 600.2482681274414 608.4905700683594 "
                  marker-end="url(#SvgjsMarker2588)"
                ></path>
              </g>
            </svg>

            <span className="absolute z-[2] font-geom xl:text-[20px] rotate-[13deg] transition duration-300 opacity-[0%] group-hover:opacity-[100%] translate-x-[-2px] xl:translate-x-[-8px] xl:translate-y-[-43px] uppercase translate-y-[-34px] text-[#203277] dark:text-[#a9baff]">
              Who I am
            </span>
            <span className="lg:w-[96px] lg:h-[96px] xl:w-[110px] transition-all duration-300 xl:h-[110px] bg-[#203277] dark:bg-[#a9baff] absolute rounded-t-full rounded-br-full group-hover:rounded-bl-full " />
            <Image
              className="lg:w-[80px] xl:w-[94px] translate-x-[8px] translate-y-[7px] rounded-full absolute"
              src="/profile.jpg"
              alt="profile"
              width={650}
              height={650}
            />
          </span>
          <span
            id="books"
            className="left-[34px] xl:left-[38px] absolute top-0 max-w-max w-max-content opacity-0 rotate-[-6deg] cursor-pointer group"
          >
            <span className=" flex flex-col text-[14px] xl:text-[16px] items-center lg:gap-[8px] xl:gap-[10px] lg:rounded-t-[16px] xl:rounded-t-[20px] lg:rounded-bl-[16px] xl:rounded-bl-[20px] py-[17px] xl:py-[20px] lg:px-[17px] xl:px-[20px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] uppercase xl:left-[12px] transition-all duration-300 group-hover:rounded-[30px] group-hover:xl:rounded-[40px]">
              <svg
                className="absolute z-[0] w-[90px] h-[100px] translate-x-[-69px] translate-y-[-60px] xl:translate-x-[-81px] scale-[90%] xl:scale-[105%] transition-all duration-300 opacity-0 group-hover:opacity-[100%]"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
              >
                <g
                  stroke-width="20"
                  className="transition-all duration-[0.6s] opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="53.5 53"
                  transform="matrix(-0.766044443118978,-0.6427876096865393,0.6427876096865393,-0.766044443118978,464.3027333729755,963.532821122207)"
                >
                  <path
                    d="M128.29476928710938 178.5Q905.2947692871094 240.5 571.2947692871094 621.5 "
                    marker-end="url(#SvgjsMarker1628)"
                  ></path>
                </g>
                <defs>
                  <marker
                    markerWidth="5"
                    markerHeight="5"
                    refX="2.5"
                    refY="2.5"
                    viewBox="0 0 5 5"
                    orient="auto"
                    id="SvgjsMarker1628"
                  >
                    <polygon
                      className="fill-[#203277] dark:fill-[#a9baff]"
                      points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                    ></polygon>
                  </marker>
                </defs>
              </svg>
              <span className="absolute z-[2] font-geom xl:text-[20px] transition duration-300 opacity-0 group-hover:opacity-[100%] xl:translate-x-[8px] xl:translate-y-[-59px] uppercase translate-y-[-50px] text-[#203277] dark:text-[#a9baff]">
                Reading List
              </span>
              <Image
                className="lg:w-[86px] xl:w-[100px]"
                src="/books.png"
                alt="books"
                width={650}
                height={650}
              />
            </span>
          </span>
          <span
            id="linkedin"
            className="lg:w-[80px] xl:w-[110px] bottom-0 absolute h-[110px] lg:left-[80px] opacity-0 rotate-[4deg]"
          >
            <span className="transition-all duration-300 flex absolute left-0 bottom-0 items-center max-w-max w-max-content lg:rounded-[20px] cursor-pointer xl:rounded-[30px] hover:rounded-[70%] bounce-age lg:p-[10px] xl:p-[14px] bg-[#203277] dark:bg-[#a9baff] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#ede7de] group">
              <svg
                className="absolute z-[0] w-[90px] h-[100px] translate-x-[-55px] translate-y-[-35px] xl:translate-y-[-50px] scale-[90%] xl:scale-[105%]"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
              >
                <g
                  stroke-width="21"
                  className="transition-all duration-300 opacity-0  group-hover:opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="35.5 51"
                  transform="rotate(230, 400, 400)"
                >
                  <path
                    d="M127.06646728515625 191.5232105255127Q904.0664672851562 38.523210525512695 575.0664672851562 639.5232105255127 "
                    marker-end="url(#SvgjsMarker1674)"
                  ></path>
                </g>
                <defs>
                  <marker
                    markerWidth="5"
                    markerHeight="5"
                    refX="2.5"
                    refY="2.5"
                    viewBox="0 0 5 5"
                    orient="auto"
                    id="SvgjsMarker1674"
                  >
                    <polygon
                      points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                      className="fill-[#203277] dark:fill-[#a9baff]"
                    ></polygon>
                  </marker>
                </defs>
              </svg>
              <span className="absolute z-[2] font-geom xl:text-[20px] transition duration-300 opacity-0 group-hover:opacity-[100%] translate-x-[12px] xl:translate-y-[-82px] uppercase translate-y-[-64px] text-[#203277] dark:text-[#a9baff]">
                Linkedin
              </span>
              <Image
                className="lg:w-[120px] xl:w-[154px]"
                src="/linkedin.png"
                alt="linkedin"
                width={650}
                height={650}
              />
            </span>
          </span>
          <span
            id="github"
            className="flex absolute right-[62px] opacity-0 cursor-pointer bottom-0 group items-center max-w-max w-max-content"
          >
            <span className="lg:rounded-[14px] transition-all duration-300 xl:rounded-[20px] py-[12px] lg:px-[10px] xl:px-[14px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] rotate-[4deg]  group-hover:rounded-[80%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                className="absolute z-[0] transition-all duration-300 opacity-0 group-hover:opacity-[100%] w-[90px] h-[100px] translate-x-[42px] xl:translate-x-[66px] translate-y-[-51px] xl:translate-y-[-50px] scale-[90%] xl:scale-[105%]"
              >
                <g
                  stroke-width="21"
                  className="transition-all duration-300 opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="35.5 51"
                  transform="rotate(230, 400, 400)"
                >
                  <path
                    d="M160 118.93435668945312Q379 895.9343566894531 640 598.9343566894531 "
                    marker-end="url(#SvgjsMarker2229)"
                  ></path>
                </g>
                <defs>
                  <marker
                    markerWidth="5"
                    markerHeight="5"
                    refX="2.5"
                    refY="2.5"
                    viewBox="0 0 5 5"
                    orient="auto"
                    id="SvgjsMarker2229"
                  >
                    <polygon
                      points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                      className="fill-[#203277] dark:fill-[#a9baff]"
                    ></polygon>
                  </marker>
                </defs>
              </svg>
              <span className="absolute z-[2] font-geom xl:text-[20px] rotate-[2deg] transition-all duration-300 opacity-0 group-hover:opacity-[100%] translate-x-[6px] xl:translate-x-[12px] xl:translate-y-[-56px] uppercase translate-y-[-48px] text-[#203277] dark:text-[#a9baff]">
                Github
              </span>
              <Image
                className="lg:w-[68px] xl:w-[90px]"
                src="/github.png"
                alt="github"
                width={650}
                height={650}
              />
            </span>
          </span>
        </div>
        <div
          ref={ref}
          onClick={() => scrollBottom()}
          onMouseEnter={() => {
            setIsCursorActive(true);
            setCursorBackground("#e2d7c5");
            setCursorText(t("scroll"));
            setScrollHover(true);
          }}
          onMouseLeave={() => {
            setIsCursorActive(false);
            setScrollHover(false);
          }}
          className="cursor-pointer z-[1] flex flex-col items-center"
        >
          <div className="flex  flex-col items-center relative">
            <div className="">
              <p>
                <MaskText
                  index={0}
                  className={classNames(
                    "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
                    {
                      "text-[21.5vw] lg:text-[126px] xl:text-[164px] font-geom leading-[100%] font-extrabold":
                        langAttribute === "en",
                      "text-[15vw] sm:text-[15.2vw] lg:text-[90px] xl:text-[114px] font-firago font-bold leading-[100%]":
                        langAttribute === "ka",
                    }
                  )}
                  inView={inView}
                >
                  {t("header_name")}
                </MaskText>
                <MaskText
                  index={1}
                  className={classNames(
                    "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
                    {
                      "text-[10.4vw] pl-[1.7%] lg:pl-0 lg:text-[62px] xl:text-[80.5px] font-geom leading-[112%] font-extrabold":
                        langAttribute === "en",
                      "text-[10vw] md:text-[10.2vw] lg:text-[59px] xl:text-[75px] font-firago font-bold leading-[100%]":
                        langAttribute === "ka",
                    }
                  )}
                  inView={inView}
                >
                  {t("profession")}
                </MaskText>
              </p>
            </div>
          </div>

          <div
            id="skills"
            className="max-w-[90vw] opacity-0 w-0 lg:max-w-[536px] xl:max-w-[684px] mt-[8px] sm:mt-[10px] lg:mt-[16px] py-[5px] sm:py-[6px] lg:py-[8px] rounded-[16px] sm:rounded-[20px] lg:rounded-[36px] md:rounded-[58px] border-[1px] border-[#203277] dark:border-[#a9baff] overflow-hidden"
          >
            <InfinityText
              texts={[
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
              ]}
              className="text-[#203277] dark:text-[#a9baff] mr-[16px] flex items-center gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] capitalize"
              iconClassName="text-[#203277] dark:text-[#f7f2f2] w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] lg:w-[16px] lg:h-[16px]"
              baseVelocity={-0.8}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
