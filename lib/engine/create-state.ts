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
        mode: "exec",
        interfaces: {
          "g0/0": { status: "down" },
        },
      },
    ],

    logs: [],
  };
}
