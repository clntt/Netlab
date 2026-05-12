import { NetworkState } from "./network-state";

export const sampleLab: NetworkState = {
  devices: [
    {
      id: "r1",
      name: "Router1",
      type: "router",
      interfaces: {
        "g0/0": "192.168.1.1",
      },
    },
    {
      id: "pc1",
      name: "PC1",
      type: "pc",
      interfaces: {
        eth0: "192.168.1.10",
      },
    },
  ],

  connections: [
    {
      from: "r1",
      to: "pc1",
    },
  ],
};
