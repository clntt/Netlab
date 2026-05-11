"use server";

import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";

import User from "@/models/user.model";
import Lab from "@/models/lab.model";

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
