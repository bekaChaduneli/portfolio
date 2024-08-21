import { cn } from "@/lib/utils";
import { IMainProjectsResponse } from "@/types/mainProjects";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RowMainProjects({
  data,
}: {
  data: IMainProjectsResponse | undefined;
}) {
  const locale = useLocale();
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  return <div className="w-full lg:w-[74%]"></div>;
}
