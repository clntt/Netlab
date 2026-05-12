"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

export default function LabCLI({
  onRun,
  prompt,
}: {
  onRun: (cmd: string) => Promise<string>;
  prompt: string;
}) {
  const [cmd, setCmd] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [pending, startTransition] = useTransition();

  const runCommand = () => {
    startTransition(async () => {
      const result = await onRun(cmd);

      setLogs((prev) => [...prev, `$ ${cmd}`, result]);
      setCmd("");
    });
  };

  return (
    <div className="rounded-2xl border p-4 space-y-4">
      <div className="h-64 overflow-y-auto bg-black p-3 text-green-400 text-sm">
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      <div className="flex gap-2">
        <span className="text-green-400 font-mono">{prompt}</span>
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          className="flex-1 rounded border px-3 py-2"
          placeholder="Enter command (ping, route, etc)"
        />

        <Button onClick={runCommand} disabled={pending}>
          Run
        </Button>
      </div>
    </div>
  );
}
