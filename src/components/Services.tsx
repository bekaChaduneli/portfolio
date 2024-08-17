"use client";

import { IServicesResponse } from "@/types/services";
import { GET_SERVICES } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import ScrollLine from "./shared/ScrollLine";

export default function Services() {
  const { data, loading, error } = useQuery<IServicesResponse>(GET_SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-[40px] md:mt-[90px] lg:mt-[100px] ">
      <ScrollLine />
    </div>
  );
}
