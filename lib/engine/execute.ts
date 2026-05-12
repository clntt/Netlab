import { LabState } from "./types";
import { runPing } from "./ping";
export function executeCommand(state: LabState, input: string) {
  const device = state.devices[0];

  const parts = input.trim().split(" ");
  const cmd = parts[0];

  // =========================
  // ENABLE
  // =========================
  if (cmd === "enable") {
    device.mode = "privileged";

    return {
      output: "Entered privileged mode",
      newState: { ...state },
    };
  }

  // =========================
  // CONFIG TERMINAL
  // =========================
  if (input === "configure terminal" && device.mode === "privileged") {
    device.mode = "config";

    return {
      output: "Enter configuration commands",
      newState: { ...state },
    };
  }

  // =========================
  // INTERFACE MODE
  // =========================
  if (cmd === "interface" && device.mode === "config") {
    const iface = parts[1];

    if (!device.interfaces[iface]) {
      return {
        output: "Interface not found",
        newState: state,
      };
    }

    device.mode = "interface";
    device.selectedInterface = iface;

    return {
      output: `Configuring ${iface}`,
      newState: { ...state },
    };
  }

  // =========================
  // IP ADDRESS
  // =========================
  if (cmd === "ip" && parts[1] === "address" && device.mode === "interface") {
    const ip = parts[2];

    const iface = device.selectedInterface!;

    device.interfaces[iface].ip = ip;

    return {
      output: `IP assigned to ${iface}`,
      newState: { ...state },
    };
  }

  // =========================
  // NO SHUTDOWN
  // =========================
  if (input === "no shutdown" && device.mode === "interface") {
    const iface = device.selectedInterface!;

    device.interfaces[iface].status = "up";

    return {
      output: `${iface} enabled`,
      newState: { ...state },
    };
  }

  // =========================
  // EXIT
  // =========================
  if (cmd === "exit") {
    if (device.mode === "interface") {
      device.mode = "config";
    } else if (device.mode === "config") {
      device.mode = "privileged";
    }

    return {
      output: "",
      newState: { ...state },
    };
  }

  // =========================
  // SHOW INTERFACES
  // =========================
  if (input === "show interfaces") {
    const output = Object.entries(device.interfaces)
      .map(
        ([name, data]) =>
          `${name} - ${data.ip || "unassigned"} - ${data.status}`
      )
      .join("\n");

    return {
      output,
      newState: { ...state },
    };
  }

  if (cmd === "ping") {
    const target = parts[1];

    const output = runPing(state, target);

    return {
      output,
      newState: {
        ...state,
        logs: [
          ...state.logs,
          {
            input,
            output,
            timestamp: Date.now(),
          },
        ],
      },
    };
  }

  return {
    output: "Unknown command",
    newState: state,
  };
}
