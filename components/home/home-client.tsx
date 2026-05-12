"use client";

import Link from "next/link";
import TerminalHero from "@/components/home/terminal-hero";
import TopologyVisualizer from "@/components/home/topology-visualizer";
import LiveMiniTerminal from "@/components/home/live-mini-terminal";
import MetricsDashboard from "@/components/home/metrics-dashboard";

import {
  ArrowRight,
  Network,
  Terminal,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useUIState } from "@/lib/ui/use-ui-state";

export default function HomeClient() {
  const { mode } = useUIState();

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border px-4 py-1 text-sm text-muted-foreground backdrop-blur">
              <Network className="mr-2 h-4 w-4 text-primary" />
              Interactive Networking Labs for Engineers
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Build, Simulate &{" "}
              <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Master Networks
              </span>
            </h1>

            {/* Subtext */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              NetLab helps engineers practice real-world networking
              configurations with interactive labs, CLI simulations, and
              collaborative learning.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/labs">
                <Button size="lg" className="gap-2">
                  Explore Labs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/create">
                <Button size="lg" variant="outline">
                  Create Lab
                </Button>
              </Link>
            </div>

            {/* ENGINE COMPONENTS */}
            <TerminalHero />
            <TopologyVisualizer />
            <LiveMiniTerminal />
            <MetricsDashboard />

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["150+", "Labs"],
                ["40+", "Engineers"],
                ["12+", "Protocols"],
                ["24/7", "Practice"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border bg-background/50 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-bold">{value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LABS */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Labs</h2>
            <p className="mt-2 text-muted-foreground">
              Practice enterprise-grade networking scenarios.
            </p>
          </div>

          <Link href="/labs">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "OSPF Multi-Area",
              desc: "Configure and troubleshoot multi-area OSPF routing.",
              level: "Intermediate",
            },
            {
              title: "VLAN Segmentation",
              desc: "Implement VLANs and trunking across switches.",
              level: "Beginner",
            },
            {
              title: "BGP Fundamentals",
              desc: "Learn external routing and autonomous systems.",
              level: "Advanced",
            },
          ].map((lab) => (
            <Card
              key={lab.title}
              className="group rounded-3xl border transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {lab.level}
                  </span>

                  <Terminal className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">{lab.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {lab.desc}
                </p>

                <Button
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:bg-transparent"
                >
                  Launch Lab →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY NETLAB */}
      <section className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">
              Everything Needed To Practice Networking
            </h2>

            <p className="mt-4 text-muted-foreground">
              From CCNA fundamentals to enterprise simulation workflows.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Terminal,
                title: "Interactive CLI",
                desc: "Practice commands in a simulated router environment.",
              },
              {
                icon: Server,
                title: "Real Lab Scenarios",
                desc: "Build hands-on skills with realistic topologies.",
              },
              {
                icon: ShieldCheck,
                title: "Career Ready",
                desc: "Prepare for certifications and real infrastructure jobs.",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="rounded-3xl border bg-background/70"
              >
                <CardContent className="p-8 text-center">
                  <feature.icon className="mx-auto h-10 w-10 text-primary" />

                  <h3 className="mt-5 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
