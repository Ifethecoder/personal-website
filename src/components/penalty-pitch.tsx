"use client";

import { useId } from "react";

export function PenaltyPitch({ onShotEnd }: { onShotEnd: () => void }) {
  const net = useId();

  return (
    <svg className="bonus-pitch" viewBox="0 0 600 360" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={net} width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" stroke="currentColor" strokeWidth="1" opacity=".35" />
        </pattern>
      </defs>
      <rect x="22" y="18" width="556" height="324" rx="24" className="bonus-pitch-ground" />
      <g stroke="currentColor" strokeWidth="2" opacity=".3">
        <path d="M128 18v166h344V18M190 184q110 126 220 0M22 310h556" />
        <circle cx="300" cy="286" r="3" fill="currentColor" />
      </g>
      <path d="m202 52 23-18h150l23 18" stroke="currentColor" strokeWidth="2" opacity=".5" />
      <rect x="202" y="52" width="196" height="92" fill={`url(#${net})`} />
      <path d="M202 144V52h196v92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M202 144h196" stroke="currentColor" strokeWidth="2" opacity=".5" />
      <g className="bonus-ball" onAnimationEnd={(event) => { if (event.animationName === "bonus-shot") onShotEnd(); }}>
        <circle r="15" fill="#f6f5ef" stroke="#242d28" strokeWidth="2" />
        <path d="m0-7 7 5-3 8h-8l-3-8Z" fill="#242d28" />
        <path d="m0-15 0 8m14 2-7 3m2 14-5-6m-13 6 5-6m-10-11 7 3" stroke="#242d28" strokeWidth="2" />
      </g>
    </svg>
  );
}
