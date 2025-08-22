import type { SVGProps } from "react";

export function ChanhDaiMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256" {...props}>
      <defs>
        <linearGradient
          id="cyberpunk-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#ffff00" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="72"
        fontFamily="monospace"
        fontWeight="bold"
        fill="url(#cyberpunk-gradient)"
        filter="url(#glow)"
        transform="skewX(-8)"
        style={{
          textShadow: "0 0 10px #00ffff, 0 0 20px #ffff00, 0 0 30px #ff00ff",
          letterSpacing: "0.2em",
        }}
      >
        GRIFFITH_SYTTT
      </text>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="72"
        fontFamily="monospace"
        fontWeight="bold"
        fill="none"
        stroke="#00ffff"
        strokeWidth="2"
        transform="skewX(-8)"
        style={{
          letterSpacing: "0.2em",
        }}
      >
        GRIFFITH_SYTTT
      </text>
    </svg>
  );
}

export const getMarkSVG = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256">
    <defs>
      <linearGradient id="cyberpunk-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00ffff" />
        <stop offset="50%" stop-color="#ffff00" />
        <stop offset="100%" stop-color="#ff00ff" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="72" font-family="monospace" font-weight="bold" fill="url(#cyberpunk-gradient)" filter="url(#glow)" transform="skewX(-8)" style="letter-spacing: 0.2em;">GRIFFITH_SYTTT</text>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="72" font-family="monospace" font-weight="bold" fill="none" stroke="#00ffff" stroke-width="2" transform="skewX(-8)" style="letter-spacing: 0.2em;">GRIFFITH_SYTTT</text>
  </svg>`;
};
