export type DeviceMode = "user" | "privileged" | "config" | "interface";

export type Device = {
  id: string;
  name: string;
  type: "router" | "switch" | "pc";

  mode: DeviceMode;

  interfaces: Record<
    string,
    {
      ip?: string;
      status: "up" | "down";
    }
  >;

  selectedInterface?: string;
};

export type LabState = {
  labId: string;
  userId: string;

  currentStep: number;

  devices: Device[];

  links: Link[];

  logs: {
    input: string;
    output: string;
    timestamp: number;
  }[];
};

export type Link = {
  fromDevice: string;
  fromInterface: string;

  toDevice: string;
  toInterface: string;
};
