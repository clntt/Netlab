"use client";

import { useState } from "react";
import { createLab } from "@/lib/actions/lab.actions";
import { Button } from "@/components/ui/button";

export default function CreateLabPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    await createLab({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      config: formData.get("config") as string,
      difficulty: formData.get("difficulty") as string,
    });

    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold">Create Lab</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input name="title" placeholder="Title" className="w-full border p-2" />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2"
        />

        <textarea
          name="config"
          placeholder="Config / Notes"
          className="w-full border p-2"
        />

        <select name="difficulty" className="w-full border p-2">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <Button disabled={loading} type="submit">
          {loading ? "Creating..." : "Create Lab"}
        </Button>
      </form>
    </div>
  );
}
