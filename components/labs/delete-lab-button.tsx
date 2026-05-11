"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";

import { deleteLab } from "@/lib/actions/lab.actions";

export default function DeleteLabButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="destructive"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await deleteLab(id);
        })
      }
    >
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
}
