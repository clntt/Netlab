"use server";

import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";

import LabSession from "@/models/lab-session.model";

export async function startLabSession(labId: string) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  await connectDB();

  const existing = await LabSession.findOne({
    userId: session.user.email,
    labId,
  });

  if (existing) return existing;

  return await LabSession.create({
    userId: session.user.email,
    labId,
    currentStep: 0,
    logs: [],
  });
}
