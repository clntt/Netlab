export type LabStep = {
  id: number;
  title: string;
  instruction: string;

  validate: {
    command: string; // expected command
    mustInclude?: string; // expected output keyword
  };
};
