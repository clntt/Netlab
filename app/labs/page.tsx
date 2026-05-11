import Lab from "@/models/lab.model";
import { connectDB } from "@/lib/db";
import Link from "next/link";

export default async function LabsPage() {
  await connectDB();

  const labs = await Lab.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Labs</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {labs.map((lab: any) => (
          <Link href={`/labs/${lab._id}`} key={lab._id}>
            <div className="rounded-xl border p-5 transition hover:shadow-md">
              <p className="text-sm text-muted-foreground">{lab.difficulty}</p>

              <h2 className="mt-2 text-lg font-semibold">{lab.title}</h2>

              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {lab.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
