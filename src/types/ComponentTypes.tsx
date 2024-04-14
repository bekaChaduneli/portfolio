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
  inView: any;
  children: ReactNode;
};
