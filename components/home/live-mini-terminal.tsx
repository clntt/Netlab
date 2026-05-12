"use client";

import { useState } from "react";

const responses: Record<string, string> = {
  enable: "Entered privileged mode",

  "show ip route": `
C 192.168.1.0/24 is directly connected, GigabitEthernet0/0
O 10.0.0.0/8 [110/2] via 192.168.1.2
`,

  "show interfaces": `
GigabitEthernet0/0 - up - 192.168.1.1
GigabitEthernet0/1 - down - unassigned
`,

  "ping 192.168.1.10": `
Reply from 192.168.1.10: bytes=32 time=3ms TTL=64
`,

  help: `
Available commands:
- enable
- show ip route
- show interfaces
- ping 192.168.1.10
`,
};

export default function LiveMiniTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to NetLab CLI",
    "Type 'help' to begin.",
  ]);

  const runCommand = () => {
    if (!input.trim()) return;

    const response = responses[input.toLowerCase()] || "% Unknown command";

    setHistory((prev) => [...prev, `Router1# ${input}`, response]);

    setInput("");
  };

  return (
    <div className="mx-auto mt-24 w-full max-w-5xl overflow-hidden rounded-3xl border bg-black shadow-2xl">
      {/* HEADER */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />

        <div className="h-3 w-3 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 text-xs text-zinc-400">Interactive CLI</span>
      </div>

      {/* BODY */}
      <div className="h-[380px] overflow-y-auto p-5 font-mono text-sm text-green-400">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-7">
            {line}
          </div>
        ))}

        {/* INPUT */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-blue-400">Router1#</span>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand();
              }
            }}
            className="flex-1 bg-transparent outline-none"
            placeholder="Type a command..."
          />

          <span className="animate-pulse text-white">█</span>
        </div>
      </div>
    </div>
  );
}
