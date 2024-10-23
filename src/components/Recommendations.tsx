"use client";

import { IRecommendationsResponse } from "@/types/recommendations";
import { GET_RECOMMENDATIONS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import Recommendation from "./Recommendation";
import { recommendationsColors } from "@/lib/siteData";
import ComponentHeadline from "./shared/ComponentHeadline";
import { useTranslations } from "next-intl";

export default function Recommendations() {
  const { data, loading, error } =
    useQuery<IRecommendationsResponse>(GET_RECOMMENDATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const t = useTranslations("Recommendations");

  return (
    <div className="flex items-center mt-[400px] flex-col">
      <div className="w-full flex justify-start max-w-[1200px]">
        <ComponentHeadline
          component="recommendations"
          leftText={t("my")}
          rightText={t("recommendations")}
        />
      </div>
      <div className="flex flex-row gap-6 max-w-[1200px] w-full">
        {data?.findManyRecommendations.map((recommendation, index) => (
          <Recommendation data={recommendation} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
