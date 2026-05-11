"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";

import User from "@/models/user.model";
import Lab from "@/models/lab.model";
import type { LabPreview } from "@/types/lab";
export async function createLab(formData: {
  title: string;
  description: string;
  config: string;
  difficulty: string;
  tags?: string[];
  topologyImage?: string;
}) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  await connectDB();

  let dbUser = await User.findOne({
    email: session.user.email,
  });

  // CREATE USER IF NOT FOUND
  if (!dbUser) {
    dbUser = await User.create({
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    });
  }

  await Lab.create({
    ...formData,
    author: dbUser._id,
  });

  redirect("/labs");
}
export async function getMyLabs(email: string): Promise<LabPreview[]> {
  await connectDB();

  const user = await User.findOne({ email });

  if (!user) return [];

  const labs = await Lab.find({
    author: user._id,
  })
    .sort({ createdAt: -1 })
    .lean();

  return labs.map((lab) => ({
    _id: lab._id.toString(),
    title: lab.title,
    description: lab.description,
    difficulty: lab.difficulty,
    createdAt: lab.createdAt,
  }));
}

export async function deleteLab(id: string) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  await connectDB();

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    throw new Error("User not found");
  }

  await Lab.findOneAndDelete({
    _id: id,
    author: user._id,
  });

  revalidatePath("/dashboard");
}

export async function updateLab(
  id: string,
  formData: {
    title: string;
    description: string;
    config: string;
    difficulty: string;
  }
) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  await connectDB();

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    throw new Error("User not found");
  }

  await Lab.findOneAndUpdate(
    {
      _id: id,
      author: user._id,
    },
    formData
  );

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
