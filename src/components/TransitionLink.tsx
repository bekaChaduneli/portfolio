"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/page-animation";

interface Props {
  href: string;
  onClick?: () => void;
  children: any;
  className?: string;
}

const TransitionLink = ({ href, className, onClick, children }: Props) => {
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
