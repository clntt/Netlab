"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import { useUIState } from "@/lib/ui/use-ui-state";
export default function Navbar() {
  const { data: session, status } = useSession();
  const { mode } = useUIState();
  return (
    <header
      className={`
    sticky top-0 z-50 border-b bg-background/80 backdrop-blur
    ${mode === "running" ? "border-blue-500/30" : ""}
    ${mode === "error" ? "border-red-500/40" : ""}
    ${mode === "success" ? "border-green-500/40" : ""}
  `}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          NetLab
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/labs" className="hover:opacity-70">
            Labs
          </Link>

          <Link href="/create" className="hover:opacity-70">
            Create
          </Link>

          <Link href="/dashboard" className="hover:opacity-70">
            Dashboard
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Auth */}
            {status === "loading" ? null : session?.user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  {session.user.name}
                </span>

                <Button
                  variant="outline"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button onClick={() => signIn()}>Login</Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
