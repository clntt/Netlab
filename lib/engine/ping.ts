import { LabState } from "./types";

export function runPing(state: LabState, targetIP: string) {
  for (const link of state.links) {
    const fromDevice = state.devices.find((d) => d.name === link.fromDevice);

    const toDevice = state.devices.find((d) => d.name === link.toDevice);

    if (!fromDevice || !toDevice) continue;

    const fromInterface = fromDevice.interfaces[link.fromInterface];

    const toInterface = toDevice.interfaces[link.toInterface];

    // must be up
    if (fromInterface.status !== "up" || toInterface.status !== "up") {
      continue;
    }

    // target IP match
    if (toInterface.ip === targetIP) {
      return `Reply from ${targetIP}: time=3ms TTL=64`;
    }
  }

  return "Destination unreachable";
}
