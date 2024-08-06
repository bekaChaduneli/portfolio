"use client";

import { IArchivesResponse } from "@/types/archives";
import { GET_ARCHIVES } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";

export default function Archives() {
  const { data, loading, error } = useQuery<IArchivesResponse>(GET_ARCHIVES, {
    variables: { skip: 0, take: 10, createdAt: "asc" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return <div>Archives</div>;
}
