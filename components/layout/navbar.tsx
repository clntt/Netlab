"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          NetLab b
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/labs" className="hover:opacity-70">
            Labs
          </Link>

          <Link href="/dashboard" className="hover:opacity-70">
            Dashboard
          </Link>

          {/* Auth State */}
          {status === "loading" ? null : session?.user ? (
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">{session.user.name}</span>

              <Button
                variant="outline"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}
        </nav>
      </div>
    </header>
  );
}
