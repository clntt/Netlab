import { NetworkState } from "./network-state";
import { ParsedCommand } from "./parser";

export function executeCommand(
  state: NetworkState,
  cmd: ParsedCommand
): string {
  switch (cmd.type) {
    case "ping": {
      const target = state.devices.find((d) =>
        Object.values(d.interfaces).includes(cmd.target)
      );

      if (!target) {
        return `Request timed out. Host unreachable: ${cmd.target}`;
      }

      return `Reply from ${cmd.target}: time=12ms TTL=64`;
    }

    case "show": {
      return state.devices.map((d) => `${d.name} (${d.type})`).join("\n");
    }

    default:
      return `Unknown command`;
  }
}
