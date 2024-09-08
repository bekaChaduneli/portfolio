"use client";
import { IServicesResponse } from "@/types/services";
import { GET_SERVICES } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { MaskText } from "../animations/MaskText";

import usePageWidth from "@/hooks/usePageWidth";
import ServicesDesktop from "./ServicesDesktop";
import ServicesSlider from "./ServicesSlider";
import ComponentHeadline from "../shared/ComponentHeadline";

export default function Services() {
  const { data, loading, error } = useQuery<IServicesResponse>(GET_SERVICES);
  const locale = useLocale();
  const t = useTranslations("Services");
  const isDesktop = usePageWidth("1024px");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="overflow-x-clip mt-[150px] mb-[100px] md:pt-[20px] md:mt-[210px] md:mb-[120px] lg:pt-[50px] lg:mt-[300px] lg:mb-[150px] pb-[60px] lg:pb-[200px] services_wrapper relative  flex flex-col justify-center bg-[#ddd9d9] before:bg-secondary after:bg-[#ddd9d9] dark:bg-[#172351] dark:before:bg-[#1c2a62] dark:after:bg-[#172351] overflow-visible">
      <ComponentHeadline leftText={t("my")} rightText={t("services")} />
      {isDesktop ? (
        <ServicesDesktop data={data} />
      ) : (
        <ServicesSlider locale={locale} data={data} />
      )}
    </div>
  );
}
