import { cn } from "@/lib/utils";
import { IServices, IServicesResponse } from "@/types/services";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function ServicesDesktopInfos({
  data,
  currentService,
  setCurrentService,
  locale,
}: {
  data: IServicesResponse | undefined;
  currentService: number;
  setCurrentService: Dispatch<SetStateAction<number>>;
  locale: string;
}) {
  const sortedServices = [...(data?.findManyServices || [])].sort(
    (a, b) => Number(a.order) - Number(b.order)
  );

  const renderers = {};

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const middleOfScreen = window.innerHeight / 2;

      serviceRefs.current.forEach((serviceRef, index) => {
        if (serviceRef) {
          const { top, bottom } = serviceRef.getBoundingClientRect();

          if (top <= middleOfScreen && bottom >= middleOfScreen) {
            setCurrentService(Number(sortedServices[index].order));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sortedServices, setCurrentService]);

  return (
    <div className="flex flex-col">
      {sortedServices?.map((service: IServices, index) => {
        const translation = service?.translations?.find(
          (translation) => translation.languageCode === locale
        );

        return (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className={cn(
              "pl-[74px] service relative after:bg-primary transition-all duration-500 before:bg-primary/5 dark:before:bg-secondary/10 dark:after:bg-linearPink pb-[80px] ",
              currentService === Number(service.order)
                ? "opacity-100"
                : "opacity-30",
              Number(service?.order) === 1
                ? "after:content-['1']"
                : Number(service?.order) === 2
                ? "after:content-['2']"
                : Number(service?.order) === 3
                ? "after:content-['3']"
                : Number(service?.order) === 4
                ? "after:content-['4']"
                : Number(service?.order) === 5 && "after:content-['5']"
            )}
          >
            <h2
              className={cn(
                "text-[32px] leading-[160%]  dark:text-secondary xl:text-[40px] xl:leading-[130%] mb-[12px] text-primary capitalize ",
                locale === "en" ? "font-geom" : "font-firago"
              )}
            >
              {translation?.name}
            </h2>
            <div className="w-[380px] xl:w-[500px] service_markdown text-primary/80 dark:text-linearPink/90">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={renderers}
              >
                {translation?.description}
              </ReactMarkdown>
              <div className="w-[80%] border-t-[1px] border-dashed border-primary self-start h-[1px] mt-[50px] dark:border-linearPink"></div>
            </div>
            <div
              style={{
                height: `${
                  Number(service.order) === sortedServices.length
                    ? ""
                    : "calc(100% - 56px)"
                }`,
              }}
              className="absolute top-[54px] left-[24px] w-0 border-l-[1px] border-dashed border-primary/50"
            />
          </div>
        );
      })}
    </div>
  );
}
