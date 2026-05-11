import { notFound } from "next/navigation";

import { connectDB } from "@/lib/db";

import Lab from "@/models/lab.model";

import EditLabForm from "@/components/labs/edit-lab-form";

export default async function EditLabPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();

  const lab = await Lab.findById(id).lean();

  if (!lab) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Edit Lab</h1>

      <EditLabForm
        lab={{
          _id: lab._id.toString(),
          title: lab.title,
          description: lab.description,
          config: lab.config,
          difficulty: lab.difficulty,
        }}
      />
    </div>
  );
}
