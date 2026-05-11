import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Build, Share & Master
          <span className="text-primary"> Network Labs</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          NetLab is a collaborative platform for network engineers and
          developers to design labs, share configurations, and learn real-world
          infrastructure skills.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/labs">
            <Button size="lg">Explore Labs</Button>
          </Link>

          <Link href="/create">
            <Button size="lg" variant="outline">
              Create Lab
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURED LABS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Featured Labs</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border p-5 transition hover:shadow-md"
            >
              <div className="text-sm text-muted-foreground">Beginner Lab</div>

              <h3 className="mt-2 text-lg font-semibold">
                OSPF Multi-Area Setup
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Learn how to configure OSPF across multiple areas with
                redistribution.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY NETLAB */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold">Why NetLab?</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-center">
            <div>
              <h3 className="font-semibold">Hands-on Learning</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Practice real networking scenarios instead of theory.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Community Driven</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Share labs and learn from other engineers worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Career Ready</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Build portfolio-ready networking projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
