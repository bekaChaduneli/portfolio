"use client";
import { IBlogsResponse } from "@/types/blogs";
import { GET_BLOGS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";

export default function Blogs() {
  const { data, loading, error } = useQuery<IBlogsResponse>(GET_BLOGS, {
    variables: { skip: 0, take: 2 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>Blogs</div>;
}
