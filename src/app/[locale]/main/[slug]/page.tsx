import React from "react";

export default function page({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  console.log(slug);
  return <div>page</div>;
}
