export type ParsedCommand =
  | { type: "ping"; target: string }
  | { type: "show" }
  | { type: "unknown"; raw: string };

export function parseCommand(input: string): ParsedCommand {
  const parts = input.trim().split(" ");

  const cmd = parts[0];

  switch (cmd) {
    case "ping":
      return {
        type: "ping",
        target: parts[1],
      };

    case "show":
      return {
        type: "show",
      };

    default:
      return {
        type: "unknown",
        raw: input,
      };
  }
}
