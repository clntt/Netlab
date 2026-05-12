import { notFound } from "next/navigation";
import LabCLI from "@/components/labs/lab-cli";
import { connectDB } from "@/lib/db";
import LabModel from "@/models/lab.model";
import CopyConfigButton from "@/components/labs/copy-config-button";
import type { Lab } from "@/types/lab";
import { parseCommand } from "@/lib/engine/parser";
import { executeCommand } from "@/lib/engine/execute";
import { sampleLab } from "@/lib/engine/sample-lab";
import { sampleSteps } from "@/lib/engine/sample-steps";
import { validateStep } from "@/lib/engine/step-engine";

export default async function LabPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();

  const lab = await LabModel.findById(id).lean<Lab>();

  if (!lab) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm text-muted-foreground">{lab.difficulty}</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {lab.title}
          </h1>

          <p className="mt-3 text-muted-foreground">{lab.description}</p>
        </div>

        {/* ACTION PANEL (future engine entry point) */}
        <div className="flex flex-col gap-3">
          <button className="rounded-lg bg-primary px-5 py-2 text-primary-foreground">
            Run Lab
          </button>

          <CopyConfigButton config={lab.config} />
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* MAIN CONFIG */}
        <div className="md:col-span-2 rounded-2xl border bg-muted/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Network Configuration</h2>

            <span className="text-xs text-muted-foreground">CLI View</span>
          </div>

          <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-green-400">
            <code>{lab.config}</code>
          </pre>
        </div>

        {/* SIDE PANEL */}
        <div className="space-y-4">
          <div className="rounded-2xl border p-5">
            <h3 className="text-sm font-semibold">Lab Info</h3>

            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                Difficulty:{" "}
                <span className="text-foreground">{lab.difficulty}</span>
              </p>

              <p>
                Status: <span className="text-green-500">Active</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="text-sm font-semibold">Author</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Lab creator information will appear here.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="text-sm font-semibold">Next Steps</h3>

            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>• Run configuration</li>
              <li>• Simulate routing</li>
              <li>• Test connectivity</li>
            </ul>
          </div>
        </div>
      </div>

      <LabCLI
        onRun={async (input) => {
          "use server";

          const parsed = parseCommand(input);
          const result = executeCommand(sampleLab, parsed);

          const step = sampleSteps[0]; // TEMP: step 1 only

          const isValid = validateStep(step, input, result);

          if (isValid) {
            return `✅ Step completed: ${step.title}`;
          }

          return result;
        }}
      />
    </div>
  );
}
