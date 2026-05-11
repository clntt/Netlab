import Link from "next/link";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { LabPreview } from "@/types/lab";
import DeleteLabButton from "@/components/labs/delete-lab-button";

import { getMyLabs } from "@/lib/actions/lab.actions";
import { Lab } from "@/types/lab";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const labs = await getMyLabs(session.user.email);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Labs</h1>

          <p className="mt-2 text-muted-foreground">
            Manage your networking labs and configurations.
          </p>
        </div>

        <Link
          href="/create"
          className="rounded-lg bg-primary px-5 py-2 text-primary-foreground"
        >
          Create Lab
        </Link>
      </div>

      {/* LABS */}
      {labs.length === 0 ? (
        <div className="rounded-2xl border p-10 text-center">
          <h2 className="text-xl font-semibold">No labs yet</h2>

          <p className="mt-2 text-muted-foreground">
            Start building your first networking lab.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab: LabPreview) => (
            <div
              key={lab._id}
              className="rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* CARD CLICK */}
              <Link href={`/labs/${lab._id}`} className="block">
                <p className="text-sm text-muted-foreground">
                  {lab.difficulty}
                </p>

                <h2 className="mt-2 text-xl font-semibold">{lab.title}</h2>

                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {lab.description}
                </p>
              </Link>

              {/* ACTIONS */}
              <div className="mt-5 flex items-center gap-3">
                <Link
                  href={`/labs/edit/${lab._id}`}
                  className="rounded-lg border px-4 py-2 text-sm"
                >
                  Edit
                </Link>

                <DeleteLabButton id={lab._id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
