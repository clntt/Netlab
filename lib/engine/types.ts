export type Device = {
  id: string;
  name: string;
  type: "router" | "switch" | "pc";

  mode: "exec" | "config";

  interfaces: Record<
    string,
    {
      ip?: string;
      status?: "up" | "down";
    }
  >;

  selectedInterface?: string;
};

export type LabState = {
  labId: string;
  userId: string;

  currentStep: number;

  devices: Device[];

  logs: {
    input: string;
    output: string;
    timestamp: number;
  }[];
};
