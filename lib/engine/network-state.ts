export type DeviceType = "router" | "switch" | "pc";

export type Device = {
  id: string;
  name: string;
  type: DeviceType;
  interfaces: Record<string, string>; // e.g. g0/0: 192.168.1.1
};

export type Connection = {
  from: string;
  to: string;
};

export type NetworkState = {
  devices: Device[];
  connections: Connection[];
};
