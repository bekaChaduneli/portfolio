import React from "react";

export default function page({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  return <div>page</div>;
}
