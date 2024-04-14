"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/page-animation";
import { TransitionLinkType } from "@/types/ComponentTypes";

const TransitionLink = ({
  href,
  className,
  onClick,
  children,
}: TransitionLinkType) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
      onClick && onClick();
    }
  };

  return (
    <button className={className && className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default TransitionLink;
