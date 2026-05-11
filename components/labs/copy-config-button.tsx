"use client";

import { Button } from "@/components/ui/button";

export default function CopyConfigButton({ config }: { config: string }) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        navigator.clipboard.writeText(config);
      }}
    >
      Copy Config
    </Button>
  );
}
