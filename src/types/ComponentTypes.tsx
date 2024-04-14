import { TFunction } from "i18next";
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
};

export interface HeaderInfosProps {
  t: TFunction;
  scrollHover: Boolean;
}

export interface TransitionLinkType {
  href: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export interface Translations {
  t: TFunction<"translation", undefined>;
  resources: any;
}
