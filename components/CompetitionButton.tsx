"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";
import { competitionData } from "@/data/competition";

export function CompetitionButton() {
  const isLive = competitionData.isLive;

  return (
    <Link
      href="/competition"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 cursor-pointer group"
      style={{ writingMode: "vertical-rl" }}
      aria-label="Competition"
    >
      <div
        className="flex items-center gap-2 px-3 py-4 rounded-l-xl shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:shadow-xl"
        style={{
          background: "linear-gradient(180deg, #F5A623 0%, #e8940f 100%)",
          writingMode: "vertical-rl",
        }}
      >
        {/* Blinking dot */}
        <span className="relative flex h-3 w-3 flex-shrink-0">
          {isLive ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300" />
          )}
        </span>

        {/* Trophy icon */}
        <Trophy className="w-4 h-4 text-white flex-shrink-0" style={{ transform: "rotate(90deg)" }} />

        {/* Label */}
        <span
          className="text-white font-bold text-xs tracking-widest uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Competition
        </span>
      </div>

      {/* Tooltip on hover */}
      {isLive && (
        <div
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
          style={{ writingMode: "horizontal-tb" }}
        >
          Registration Open!
        </div>
      )}
    </Link>
  );
}
