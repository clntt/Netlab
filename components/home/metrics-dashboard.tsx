"use client";

import { Activity, Server, ShieldCheck, Wifi } from "lucide-react";

const metrics = [
  {
    icon: Server,
    label: "Active Nodes",
    value: "24",
    status: "+4 this week",
  },

  {
    icon: Wifi,
    label: "Packet Delivery",
    value: "98.2%",
    status: "Stable",
  },

  {
    icon: Activity,
    label: "Avg Latency",
    value: "4ms",
    status: "Optimal",
  },

  {
    icon: ShieldCheck,
    label: "Lab Success Rate",
    value: "91%",
    status: "Excellent",
  },
];

export default function MetricsDashboard() {
  return (
    <section className="relative overflow-hidden border-t py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Real-Time Infrastructure Insights
          </h2>

          <p className="mt-4 text-muted-foreground">
            Monitor simulations, network performance, and lab activity across
            your learning environment.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative overflow-hidden rounded-3xl border bg-background/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)] opacity-0 transition group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Value */}
              <div className="relative mt-6 text-4xl font-bold tracking-tight">
                {metric.value}
              </div>

              {/* Label */}
              <div className="relative mt-2 text-sm text-muted-foreground">
                {metric.label}
              </div>

              {/* Status */}
              <div className="relative mt-6 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                <span className="text-green-500">{metric.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Panel */}
        <div className="mt-16 rounded-3xl border bg-background/60 p-8 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                Network Simulation Environment
              </h3>

              <p className="mt-2 text-muted-foreground">
                Interactive routing, switching, and infrastructure labs running
                in real time.
              </p>
            </div>

            <div className="flex gap-6">
              <div>
                <div className="text-3xl font-bold">12+</div>

                <div className="text-sm text-muted-foreground">Protocols</div>
              </div>

              <div>
                <div className="text-3xl font-bold">150+</div>

                <div className="text-sm text-muted-foreground">Labs</div>
              </div>

              <div>
                <div className="text-3xl font-bold">99.9%</div>

                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
