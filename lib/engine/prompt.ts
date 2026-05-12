import { Device } from "./types";

export function getPrompt(device: Device) {
  switch (device.mode) {
    case "user":
      return `${device.name}>`;

    case "privileged":
      return `${device.name}#`;

    case "config":
      return `${device.name}(config)#`;

    case "interface":
      return `${device.name}(config-if)#`;

    default:
      return `${device.name}>`;
  }
}
