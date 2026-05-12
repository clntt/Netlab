import { LabStep } from "./lab-steps";

export const sampleSteps: LabStep[] = [
  {
    id: 1,
    title: "Check connectivity",
    instruction: "Ping PC1 from Router",

    validate: {
      command: "ping 192.168.1.10",
      mustInclude: "Reply",
    },
  },

  {
    id: 2,
    title: "View devices",
    instruction: "Show all devices in network",

    validate: {
      command: "show",
      mustInclude: "Router1",
    },
  },
];
