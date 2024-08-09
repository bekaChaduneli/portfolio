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
  Star(props: IconProps) {
    return (
      <svg
        height="800px"
        width="800px"
        version="1.1"
        id="Capa_1"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 47.94 47.94"
      >
        <path
          fill="#ED8A19"
          d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
            c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
            c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
            c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
            c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
            C22.602,0.567,25.338,0.567,26.285,2.486z"
        />
      </svg>
    );
  },
};
