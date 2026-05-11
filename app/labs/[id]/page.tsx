import { notFound } from "next/navigation";
import { connectDB } from "@/lib/db";
import Lab from "@/models/lab.model";

export default async function LabPage({ params }: { params: { id: string } }) {
  await connectDB();

  const lab = await Lab.findById(params.id).lean();

  if (!lab) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      {/* HEADER */}
      <div>
        <p className="text-sm text-muted-foreground">{lab.difficulty}</p>

        <h1 className="text-3xl font-bold">{lab.title}</h1>

        <p className="mt-2 text-muted-foreground">{lab.description}</p>
      </div>

      {/* CONFIG SECTION */}
      <div>
        <h2 className="text-xl font-semibold">Lab Configuration</h2>

        <pre className="mt-4 rounded-xl border bg-muted p-4 text-sm overflow-auto">
          {lab.config}
        </pre>
      </div>

      {/* TAGS */}
      {lab.tags?.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {lab.tags.map((tag: string) => (
            <span key={tag} className="rounded-full border px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
