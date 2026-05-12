import { LabStep } from "./lab-steps";

export function validateStep(
  step: LabStep,
  command: string,
  output: string
): boolean {
  const isCommandCorrect = command.trim() === step.validate.command;

  const isOutputCorrect = step.validate.mustInclude
    ? output.includes(step.validate.mustInclude)
    : true;

  return isCommandCorrect && isOutputCorrect;
}
