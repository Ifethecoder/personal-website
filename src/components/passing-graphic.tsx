"use client";

import { useState } from "react";

export function PassingGraphic() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="passing-card" data-paused={paused}>
      <div className="flex items-center justify-between gap-4 px-5 pt-4">
        <span className="eyebrow">A different kind of connection</span>
        <button
          type="button"
          className="motion-control rounded-full px-3 py-1 text-xs"
          aria-pressed={paused}
          aria-label={paused ? "Resume passing animation" : "Pause passing animation"}
          onClick={() => setPaused(!paused)}
        >
          {paused ? "Play" : "Pause"}
        </button>
        <span className="motion-static text-xs">Still play</span>
      </div>
      <svg className="pitch" viewBox="0 0 360 170" fill="none" aria-hidden="true">
        <g className="pitch-lines" stroke="currentColor" strokeWidth="1">
          <rect x="22" y="16" width="316" height="138" rx="3" />
          <path d="M180 16v138M22 51h38v68H22m316-68h-38v68h38" />
          <circle cx="180" cy="85" r="29" />
          <circle cx="180" cy="85" r="2" fill="currentColor" />
        </g>
        <path className="passing-route" d="M80 112 174 48 278 105Z" stroke="currentColor" strokeDasharray="4 6" />
        <g className="players" fill="var(--surface)" stroke="currentColor" strokeWidth="1.5">
          <circle cx="80" cy="112" r="7" />
          <circle cx="174" cy="48" r="7" />
          <circle cx="278" cy="105" r="7" />
        </g>
        <circle className="passing-ball" cx="0" cy="0" r="4" fill="currentColor" stroke="var(--surface)" strokeWidth="2" />
      </svg>
      <p className="px-5 pb-4 text-xs muted">Find the space. Make the connection.</p>
    </div>
  );
}
