import { IPosts } from "@/types/linkedin";
import React from "react";

export default function Post({
  post,
  locale,
}: {
  post: IPosts;
  locale: string;
}) {
  console.log(post);
  const data = post?.translations?.find(
    (translation) => translation.languageCode === locale
  );
  return <div>Post</div>;
}
