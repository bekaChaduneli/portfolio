"use client";

import { IRecommendationsResponse } from "@/types/recommendations";
import { GET_RECOMMENDATIONS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";

export default function Recommendations() {
  const { data, loading, error } =
    useQuery<IRecommendationsResponse>(GET_RECOMMENDATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>Recommendations</div>;
}
