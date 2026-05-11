export type Lab = {
  _id: string;
  title: string;
  description: string;
  config: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  createdAt?: string;
  updatedAt?: string;
};
export type LabInput = {
  title: string;
  description: string;
  config: string;
  difficulty: Lab["difficulty"];
  tags?: string[];
  topologyImage?: string;
};
export type LabPreview = {
  _id: string;
  title: string;
  description: string;
  difficulty: Lab["difficulty"];
  createdAt?: string;
};
