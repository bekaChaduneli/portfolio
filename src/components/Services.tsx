"use client";

import { IServicesResponse } from "@/types/services";
import { GET_SERVICES } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";

export default function Services() {
  const { data, loading, error } = useQuery<IServicesResponse>(GET_SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return <div>Services</div>;
}
