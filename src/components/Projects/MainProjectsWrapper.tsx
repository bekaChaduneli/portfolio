"use client";

import { IMainProjectsResponse } from "@/types/mainProjects";
import { GET_MAINPROJECTS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import MainProjects from "./MainProjects";

export default function MainProjectsWrapper() {
  const { data, loading, error } = useQuery<IMainProjectsResponse>(
    GET_MAINPROJECTS,
    {
      variables: { skip: 0, take: 8, createdAt: "asc" },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <MainProjects data={data} />
    </div>
  );
}
