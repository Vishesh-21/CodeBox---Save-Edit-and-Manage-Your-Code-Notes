"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createSnippet = async (formData) => {
  const title = formData.get("title")?.toString().trim();
  const code = formData.get("code")?.toString().trim();

  if (!title || !code) {
    return;
  }

  await prisma.snippet.create({
    data: { title, code, date: new Date() },
  });
  revalidatePath("/");
  redirect("/");
};

export const saveSnippet = async (id, code) => {
  await prisma.snippet.update({
    where: { id },
    data: {
      code,
    },
  });
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id) => {
  await prisma.snippet.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
};
