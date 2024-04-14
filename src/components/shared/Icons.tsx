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
          className="transition-all duration-300 opacity-0  group-hover:opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
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
          className="transition-all duration-300 opacity-0 group-hover:opacity-[100%] stroke-[#203277] dark:stroke-[#a9baff]"
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
};
