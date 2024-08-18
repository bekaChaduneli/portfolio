import { ReactNode } from "react";

export type InfinityTextProps = {
  texts: Array<string>;
  className: string;
  iconClassName: string;
  baseVelocity: number;
};

export type MaskTextType = {
  index: number;
  className: string;
  inView: boolean;
  children: ReactNode;
  delay?: number;
  type?: string;
};

export interface HeaderInfosProps {
  scrollHover: Boolean;
}

export interface TransitionLinkType {
  href: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}
