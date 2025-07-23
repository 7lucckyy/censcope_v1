"use server";
import { revalidatePath } from "next/cache";
import { ZodError, z } from "zod";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { createUserFormSchema } from "@/lib/validations";
import { auth } from "../auth";
import { deleteFromCloudinary, uploadToCloudinary } from "../cloudinary";
import { fileToURI } from "../utils";
import { UploadApiResponse } from "cloudinary";

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {};

type ToDiscoUnion<T extends Record<string, object>> = {
  [K in keyof T]: Prettify<{ status: K } & T[K]>;
}[keyof T];


type ActionResult1 = 
  | { status: "success"}
  | { status: "error";

type ActionResult = Prettify<
  ToDiscoUnion<{
    success: { data?: Record<string, unknown> };
    error: { errors?: Record<string, unknown> };
  }> & {
    message: string;
  }
>;
  


export async function createOrUpdateUser(
  formdata: FormData
): Promise<ActionResult> {
  const rawFormData = Object.fromEntries(formdata.entries());
  const userId = rawFormData["userId"] as string;
  const validationResult = createUserFormSchema(!!userId, true).safeParse(
    rawFormData
  );

  if (!validationResult.success) {
    console.error("Validation Error:", validationResult.error.flatten());
    return {
      status: "error",
      message: "Invalid form data.",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { name, email, password, avatar } = validationResult.data;
  let avatarPath: string | undefined = undefined;
  let cloudinaryRes: UploadApiResponse|null=null;
  // Flag to track if it's an update operation
  const isUpdateOperation = !!userId;

  try {
    const session = await auth();

    if (!session || !session.user) {
      return {
        status: "error",
        message: "Could not authenticate user. Please sign in.",
      };
    }


    if (avatar) {
      const fileURI = await fileToURI(avatar);

      cloudinaryRes = await uploadToCloudinary(
        fileURI,
        `avatar/${session?.user.id}`
      );

      if (!cloudinaryRes) {
        console.error("Avatar upload succeeded but path is missing");
        return {
          status: "error",
          message: "Failed to get avatar path after upload.",
        };
      }
      avatarPath = cloudinaryRes.secure_url;
    }

    // --- 2. Perform Create or Update ---
    if (isUpdateOperation && userId) {
      const oldData = await db.select().from(users).where(eq(users.id, userId))
      
      const dataToUpdate: { name: string; avatar?: string } = { name };
      if (avatarPath) {
        dataToUpdate.avatar = avatarPath;
      }

      const result = await db
        .update(users)
        .set(dataToUpdate)
        .where(eq(users.id, userId))
        .$returningId();

      if (!result || result.length === 0) {
        console.error("DB update failed for user ID:", userId);
        // Attempt to delete newly uploaded avatar if DB update failed?
        if (avatarPath && cloudinaryRes) await deleteFromCloudinary(cloudinaryRes.public_id);
        return {
          status: "error",
          message: "User not found or failed to update profile information.",
        };
      }

      const oldAvatarPublicId = oldData.at(0).avatarPublicId
      const oldAvatarPath = oldData.at(0).avatar
      // --- Delete old avatar now if DB update succeeded ---
      if (oldAvatarPath && oldAvatarPath !== avatarPath) {
        await deleteFromCloudinary(oldAvatarPublicId);
      }

      return {
        status: "success",
        message: `User profile updated successfully for ${result[0].updatedEmail}.`,
        data: {
          userId: result[0].updatedId,
          email: result[0].updatedEmail,
        }
      };
    } else {
      const userData = {
        name,
        avatar: avatarPath,
      };

      const result = await db
        .update(users)
        .set(userData)
        .where(eq(users.id, authData.user.id))
        .returning({
          insertedId: users.id, // return specific fields
          insertedEmail: users.email,
        });

      if (!result || result.length === 0) {
        console.error(
          "DB insert failed after successful signup. Auth User ID:",
          authData.user.id
        );

        if (avatarPath) {
          await deleteFromCloudinary(cloudinaryRes.public_id);
        }
        return {
          status: "error",
          message: "Failed to save user profile information after signup.",
        };
      }

      // 5. Return Success
      return {
        status: "success",
        message: `User registration initiated successfully for ${result[0].insertedEmail}. Please check your email for verification if required.`,

        userId: result[0].insertedId,
        email: result[0].insertedEmail,
      };
    }
  } catch (error) {
    console.error("Error creating user:", error);
    // Handle Zod errors during parsing (though `safeParse` catches them earlier)
    if (error instanceof ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const sanitizedErrors: Record<string, string[]> = {};

      Object.keys(fieldErrors).forEach((key) => {
        if (fieldErrors[key]) {
          sanitizedErrors[key] = fieldErrors[key] as string[];
        }
      });

      return {
        status: "error",
        message: "Invalid data provided.",
        errors: sanitizedErrors,
      };
    }

    // Handle generic errors
    if (error instanceof Error) {
      // Avoid exposing potentially sensitive details from error.message directly
      return {
        status: "error",
        message: `An unexpected server error occurred: ${error.message}`,
      }; // Or a more generic message for production
    }

    // Fallback for unknown errors
    return {
      status: "error",
      message: "An unknown error occurred while creating the user.",
    };
  }
}

const DeleteUserSchema = z.object({
  userId: z.string().min(1, "User ID cannot be empty."),
});

type DeleteActionResult =
  | { status: "success"}
  | { status: "error";

export async function deleteUser(
  userIdToDelete: string
): Promise<DeleteActionResult> {
  const validationResult = DeleteUserSchema.safeParse({
    userId: userIdToDelete,
  });

  if (!validationResult.success) {
    console.error("Validation Error:", validationResult.error.flatten());
    const errorMessages = validationResult.error.errors
      .map((e) => e.message)
      .join(", ");
    return {
      status: "error",
      message: `Invalid input: ${errorMessages}`,
    };
  }

  const { userId } = validationResult.data;

  try {
    const session = await auth();

    if (!session || !session.user) {
      return {
        status: "error",
        message: "Could not authenticate user. Please sign in.",
      };
    }

    const deleteDbResult = await db
      .delete(users)
      .where(eq(users.id, userId))
      .returning({ deletedId: users.id });

    if (!deleteDbResult || deleteDbResult.length === 0) {
      // This could happen if the user was already deleted from the DB or never existed there
      console.warn(
        `User ${userId} not found in the local database or already deleted.`
      );

      return {
        status: "success",
        message: `User removed from authentication, but profile data was not found in the database.`,
      };
    } else {
      console.log(
        `Successfully deleted user ${deleteDbResult[0].deletedId} from the database.`
      );
    }

    revalidatePath("/admin/users");

    return {
      status: "success",
      message: `User ${userId} has been successfully deleted.`,
    };
  } catch (error) {
    console.error(`Error deleting user ${userId}:`, error);

    // Handle generic errors
    if (error instanceof Error) {
      return {
        status: "error",
        message: `An unexpected server error occurred: ${error.message}`,
      };
    }

    // Fallback for unknown errors
    return {
      status: "error",
      message: "An unknown error occurred while deleting the user.",
    };
  }
}
