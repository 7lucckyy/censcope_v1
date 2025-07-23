"use server";

import { db } from "@/db";
import { tags } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createTag(tagName: string) {
  try {
    const newTag = await db
      .insert(tags)
      .values({
        name: tagName,
      })
      .returning();

    return newTag[0];
  } catch (error) {
    console.error("Error creating tag:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create tag");
  }
}
export async function deleteTag(tagId: string) {
  try {
    const deletedTag = await db
      .delete(tags)
      .where(eq(tags.id, tagId))
      .returning();

    return deletedTag[0];
  } catch (error) {
    console.error("Error deleting tag:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to delete tag");
  }
}
