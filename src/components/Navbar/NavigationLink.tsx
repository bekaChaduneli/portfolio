"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavigationLink({ href, ...rest }: any) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-[32px] leading-[43px] font-medium xl:font-bold text-black   lg:text-sm  lg:leading-normal  lg:font-medium relative max-w-fit transtiion-all duration-300 ease-in-out",
        isActive &&
          `md:text-black/50 
        lg:before:content-['']
        lg:before:absolute
        lg:before:bottom-[-5px]
        lg:before:left-0
        lg:before:w-full
        lg:before:h-[1px]
        lg:before:bg-black/50
        
        
        `
      )}
      href={href}
      {...rest}
    />
  );
}
