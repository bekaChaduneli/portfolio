declare module "@splidejs/react-splide" {
  import * as React from "react";

  export interface SplideProps {
    options?: object;
    className?: string;
    hasTrack?: boolean;
    tag?: string;
    id?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export class Splide extends React.Component<SplideProps> {}
  export class SplideSlide extends React.Component<
    React.HTMLAttributes<HTMLDivElement>
  > {}
}
