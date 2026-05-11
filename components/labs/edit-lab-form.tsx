"use client";

import { useState } from "react";

import { updateLab } from "@/lib/actions/lab.actions";

import { Button } from "@/components/ui/button";

export default function EditLabForm({
  lab,
}: {
  lab: {
    _id: string;
    title: string;
    description: string;
    config: string;
    difficulty: string;
  };
}) {
  const [title, setTitle] = useState(lab.title);
  const [description, setDescription] = useState(lab.description);
  const [config, setConfig] = useState(lab.config);
  const [difficulty, setDifficulty] = useState(lab.difficulty);

  return (
    <form
      action={async () =>
        updateLab(lab._id, {
          title,
          description,
          config,
          difficulty,
        })
      }
      className="space-y-6"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="min-h-32 w-full rounded-lg border p-3"
      />

      <textarea
        value={config}
        onChange={(e) => setConfig(e.target.value)}
        className="min-h-48 w-full rounded-lg border p-3 font-mono"
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full rounded-lg border p-3"
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <Button type="submit">Save Changes</Button>
    </form>
  );
}
