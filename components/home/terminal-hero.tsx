"use client";

import { useEffect, useState } from "react";

const commands = [
  "enable",
  "configure terminal",
  "interface g0/0",
  "ip address 192.168.1.1",
  "no shutdown",
  "ping 192.168.1.10",
  "show ip route",
];

export default function TerminalHero() {
  const [displayed, setDisplayed] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentCommand = commands[commandIndex];

    if (charIndex < currentCommand.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentCommand[charIndex]);

        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setDisplayed("");
      setCharIndex(0);

      setCommandIndex((prev) => (prev === commands.length - 1 ? 0 : prev + 1));
    }, 1800);

    return () => clearTimeout(pause);
  }, [charIndex, commandIndex]);

  return (
    <div className="relative mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-3xl border bg-black shadow-2xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Top Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />

        <div className="h-3 w-3 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 text-xs text-zinc-400">NetLab Terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm text-green-400 md:text-base">
        <div className="mb-4 text-zinc-500">
          Simulated Cisco CLI Environment
        </div>

        <div className="flex flex-wrap">
          <span className="mr-2 text-blue-400">Router1(config)#</span>

          <span>{displayed}</span>

          <span className="ml-1 animate-pulse text-white">█</span>
        </div>

        {/* Fake Output */}
        <div className="mt-6 space-y-2 text-zinc-500">
          <p>Interface GigabitEthernet0/0 configured</p>
          <p>OSPF adjacency established</p>
          <p>Routing table updated successfully</p>
        </div>
      </div>
    </div>
  );
}
