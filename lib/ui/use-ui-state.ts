"use client";

import { create } from "zustand";

type UIState = {
  mode: "idle" | "running" | "success" | "error";
  setMode: (mode: UIState["mode"]) => void;
};

export const useUIState = create<UIState>((set) => ({
  mode: "idle",
  setMode: (mode) => set({ mode }),
}));
