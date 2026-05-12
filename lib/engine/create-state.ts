import { LabState } from "./types";

export function createInitialState(labId: string, userId: string): LabState {
  return {
    labId,
    userId,
    currentStep: 1,

    devices: [
      {
        id: "r1",
        name: "Router1",
        type: "router",

        mode: "user",

        interfaces: {
          "g0/0": {
            status: "down",
          },
        },
      },

      {
        id: "pc1",
        name: "PC1",
        type: "pc",

        mode: "user",

        interfaces: {
          eth0: {
            ip: "192.168.1.10",
            status: "up",
          },
        },
      },
    ],
    links: [
      {
        fromDevice: "Router1",
        fromInterface: "g0/0",

        toDevice: "PC1",
        toInterface: "eth0",
      },
    ],

    logs: [],
  };
}
