"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-4 text-center">
        <h1 className="text-2xl font-bold">Login to NetLab</h1>

        <Button
          className="w-full"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Continue with Google
        </Button>

        <Button
          className="w-full"
          variant="outline"
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
}
