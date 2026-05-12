import { LabState } from "./types";

export function executeCommand(
  state: LabState,
  input: string
): { output: string; newState: LabState } {
  const parts = input.trim().split(" ");
  const cmd = parts[0];

  // 🧠 PING
  if (cmd === "ping") {
    const target = parts[1];

    const hasDevice = state.devices.some((d) =>
      Object.values(d.interfaces).some((i) => i.ip === target)
    );

    const output = hasDevice
      ? `Reply from ${target}: time=12ms`
      : `Destination unreachable`;

    return {
      output,
      newState: {
        ...state,
        logs: [...state.logs, { input, output, timestamp: Date.now() }],
      },
    };
  }

  // 🧠 SHOW
  if (cmd === "show") {
    const output = state.devices.map((d) => `${d.name} (${d.type})`).join("\n");

    return {
      output,
      newState: {
        ...state,
        logs: [...state.logs, { input, output, timestamp: Date.now() }],
      },
    };
  }

  return {
    output: "Unknown command",
    newState: state,
  };
}
