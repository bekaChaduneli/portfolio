"use client";

import { IMainProjectsResponse } from "@/types/mainProjects";
import { GET_MAINPROJECTS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";

export default function MainProjects() {
  const { data, loading, error } = useQuery<IMainProjectsResponse>(
    GET_MAINPROJECTS,
    {
      variables: { skip: 0, take: 10, createdAt: "asc" },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return <div>MainProjects</div>;
}
