import { LabState } from "./types";

const store = new Map<string, LabState>();

export function getState(sessionId: string) {
  return store.get(sessionId);
}

export function setState(sessionId: string, state: LabState) {
  store.set(sessionId, state);
}

export function updateState(
  sessionId: string,
  updater: (state: LabState) => LabState
) {
  const current = store.get(sessionId);

  if (!current) throw new Error("State not found");

  const updated = updater(current);

  store.set(sessionId, updated);

  return updated;
}
