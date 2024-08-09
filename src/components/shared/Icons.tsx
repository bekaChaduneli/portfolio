import { SVGProps, SVGAttributes } from "react";

type IconProps = SVGProps<SVGSVGElement> & SVGAttributes<SVGSVGElement>;

export const Icons = {
  GithubArrow(props: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        {...props}
      >
        <g
          stroke-width="21"
          className="transition-all duration-300 opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="35.5 51"
          transform="rotate(230, 400, 400)"
        >
          <path
            d="M160 118.93435668945312Q379 895.9343566894531 640 598.9343566894531 "
            marker-end="url(#SvgjsMarker2229)"
          ></path>
        </g>
        <defs>
          <marker
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            viewBox="0 0 5 5"
            orient="auto"
            id="SvgjsMarker2229"
          >
            <polygon
              points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
              className="fill-[#203277] dark:fill-[#a9baff]"
            ></polygon>
          </marker>
        </defs>
      </svg>
    );
  },
  LinkedinArrow(props: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        {...props}
      >
        <g
          stroke-width="21"
          className="transition-all duration-300 stroke-[#203277] dark:stroke-[#a9baff]"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="35.5 51"
          transform="rotate(230, 400, 400)"
        >
          <path
            d="M127.06646728515625 191.5232105255127Q904.0664672851562 38.523210525512695 575.0664672851562 639.5232105255127 "
            marker-end="url(#SvgjsMarker1674)"
          ></path>
        </g>
        <defs>
          <marker
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            viewBox="0 0 5 5"
            orient="auto"
            id="SvgjsMarker1674"
          >
            <polygon
              points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
              className="fill-[#203277] dark:fill-[#a9baff]"
            ></polygon>
          </marker>
        </defs>
      </svg>
    );
  },
  ReadingArrow(props: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        {...props}
      >
        <g
          stroke-width="20"
          className="transition-all duration-[0.6s] opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="53.5 53"
          transform="matrix(-0.766044443118978,-0.6427876096865393,0.6427876096865393,-0.766044443118978,464.3027333729755,963.532821122207)"
        >
          <path
            d="M128.29476928710938 178.5Q905.2947692871094 240.5 571.2947692871094 621.5 "
            marker-end="url(#SvgjsMarker1628)"
          ></path>
        </g>
        <defs>
          <marker
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            viewBox="0 0 5 5"
            orient="auto"
            id="SvgjsMarker1628"
          >
            <polygon
              className="fill-[#203277] dark:fill-[#a9baff]"
              points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
            ></polygon>
          </marker>
        </defs>
      </svg>
    );
  },
  WhoIAmArrow(props: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 640 800"
        {...props}
      >
        <defs>
          <marker
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            viewBox="0 0 5 5"
            orient="auto"
            id="SvgjsMarker2588"
          >
            <polygon
              points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
              className="fill-[#203277] dark:fill-[#a9baff]"
            />
          </marker>
        </defs>
        <g
          className="transition-all duration-300  stroke-[#203277] dark:stroke-[#a9baff]"
          stroke-width="22"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="rotate(204, 320, 400)"
          stroke-dasharray="41.5 46"
        >
          <path
            d="M107.2482681274414 115.49057006835938Q-154.7517318725586 892.4905700683594 600.2482681274414 608.4905700683594 "
            marker-end="url(#SvgjsMarker2588)"
          ></path>
        </g>
      </svg>
    );
  },
  DropArrow(props: IconProps) {
    return (
      <svg
        width="9"
        height="5"
        viewBox="0 0 9 5"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.15508 2.9984e-07C8.60994 3.17683e-07 8.83774 0.529944 8.5161 0.83988L4.69436 4.52257C4.49497 4.7147 4.1717 4.7147 3.97231 4.52257L0.150565 0.83988C-0.171074 0.529943 0.0567241 -1.78436e-08 0.511591 0L8.15508 2.9984e-07Z"
          fill="#2b3b7a"
        />
      </svg>
    );
  },
};
