import { IServicesResponse } from "@/types/services";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/core/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function ServicesSlider({
  data,
  locale,
}: {
  data: IServicesResponse | undefined;
  locale: string;
}) {
  const renderers = {};

  return (
    <div className="relative w-full  lg:hidden flex justify-center pb-[24px] md:pb-[80px]">
      <Carousel className="w-full px-[20px] max-w-[580px]">
        <CarouselContent>
          {data?.findManyServices.map((service, index) => {
            const translation = service?.translations?.find(
              (translation) => translation.languageCode === locale
            );
            const headline = translation?.name.split(" ");
            return (
              <CarouselItem key={index} className="">
                <div className="px-3 flex flex-col justify-start items-start h-[640px] relative">
                  <div
                    className={cn(
                      "overflow-hidden whitespace-nowrap sticky top-[0px] w-full h-[311px] shadow-md shadow-black/30 rounded-[30px] transition-all duration-[0.3s]",
                      index + 1 === 1
                        ? "bg-[#493b95]/25 dark:bg-[#8a7fc5]/60"
                        : index + 1 === 2
                        ? "bg-[#958d3b]/25 dark:bg-[#c57f7f]/60"
                        : index + 1 === 3
                        ? "bg-[#b9deaa] dark:bg-[#b9deaa]"
                        : index + 1 === 4
                        ? "bg-[#e2eff7] dark:bg-[#e2eff7]"
                        : "bg-[#493b95]/25 dark:bg-[#8a7fc5]/60"
                    )}
                  >
                    <div className="flex aspect-square items-center justify-center  ">
                      <div
                        className={cn(
                          "relative w-full h-full flex justify-center items-center"
                        )}
                      >
                        <Image
                          src={service.background || ""}
                          alt="background"
                          width={700}
                          height={700}
                          className={cn(
                            " h-auto w-[310px] absolute left-[50%] translate-x-[-50%]",
                            index + 1 === 1
                              ? "top-[12px]"
                              : index + 1 === 2
                              ? " top-0"
                              : index + 1 === 3
                              ? "top-[30px]"
                              : index + 1 === 4
                              ? "top-[30px]"
                              : "bottom-[0]"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    key={index}
                    className={cn(
                      "mt-[22px] service relative after:bg-primary transition-all duration-500 before:bg-primary/5 dark:before:bg-secondary/10 dark:after:bg-linearPink",
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
                        "text-[24px] pl-[62px]  leading-[100%]  dark:text-secondary h-[44px] flex items-center relative mb-[12px] text-primary capitalize ",
                        locale === "en" ? "font-geom" : "font-firago"
                      )}
                    >
                      {translation?.name}
                    </h2>
                    <div className="w-full service_markdown text-primary/80 dark:text-linearPink/90 text-[13px] min-[500px]:text-[16px] pt-[10px]">
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                        components={renderers}
                      >
                        {translation?.description}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
      </Carousel>
    </div>
  );
}
