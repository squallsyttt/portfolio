import type { SVGProps } from "react";

export function ChanhDaiMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256" {...props}>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="80"
        fill="currentColor"
      >
        Griffith_syttt
      </text>
    </svg>
  );
}

export const getMarkSVG = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="currentColor">Griffith_syttt</text></svg>`;
};
