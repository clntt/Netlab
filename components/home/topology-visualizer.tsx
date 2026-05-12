"use client";

import { Router, Monitor, Server, Network } from "lucide-react";

export default function TopologyVisualizer() {
  return (
    <div className="relative mx-auto mt-24 flex h-[420px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl border bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CENTER ROUTER */}
      <div className="absolute z-20 flex flex-col items-center">
        <div className="rounded-2xl border bg-background p-5 shadow-2xl">
          <Router className="h-10 w-10 text-primary" />
        </div>

        <span className="mt-2 text-sm font-medium">Core Router</span>
      </div>

      {/* LEFT SWITCH */}
      <div className="absolute left-24 top-28 z-20 flex flex-col items-center">
        <div className="rounded-2xl border bg-background p-5 shadow-xl">
          <Network className="h-9 w-9 text-blue-400" />
        </div>

        <span className="mt-2 text-sm">Switch-A</span>
      </div>

      {/* RIGHT SERVER */}
      <div className="absolute right-24 top-24 z-20 flex flex-col items-center">
        <div className="rounded-2xl border bg-background p-5 shadow-xl">
          <Server className="h-9 w-9 text-green-400" />
        </div>

        <span className="mt-2 text-sm">Server-01</span>
      </div>

      {/* BOTTOM PC */}
      <div className="absolute bottom-20 z-20 flex flex-col items-center">
        <div className="rounded-2xl border bg-background p-5 shadow-xl">
          <Monitor className="h-9 w-9 text-purple-400" />
        </div>

        <span className="mt-2 text-sm">Client-PC</span>
      </div>

      {/* CONNECTIONS */}

      {/* Left → Center */}
      <div className="absolute left-[220px] top-[170px] h-[2px] w-[220px] bg-gradient-to-r from-blue-400 to-primary animate-pulse" />

      {/* Right → Center */}
      <div className="absolute right-[220px] top-[170px] h-[2px] w-[220px] bg-gradient-to-l from-green-400 to-primary animate-pulse" />

      {/* Bottom → Center */}
      <div className="absolute bottom-[120px] h-[140px] w-[2px] bg-gradient-to-t from-purple-400 to-primary animate-pulse" />

      {/* Floating Status */}
      <div className="absolute right-6 top-6 rounded-xl border bg-background/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2 text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Network Stable
        </div>
      </div>

      {/* Packet Animation */}
      <div className="absolute left-[220px] top-[164px] h-4 w-4 animate-[ping_2s_linear_infinite] rounded-full bg-blue-400" />

      <div className="absolute right-[220px] top-[164px] h-4 w-4 animate-[ping_2s_linear_infinite] rounded-full bg-green-400" />

      <div className="absolute bottom-[180px] h-4 w-4 animate-[ping_2s_linear_infinite] rounded-full bg-purple-400" />
    </div>
  );
}
