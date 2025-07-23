"use client";

import { useState, useMemo, useTransition } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { toast } from "sonner";

import { AvatarUpload } from "./avatar-upload";
import { createOrUpdateUser } from "@/lib/actions/users";
import { SelectUser } from "@/db/schema";
import { getSupabaseImagePath } from "@/lib/utils";
import { createUserFormSchema, UserFormValues } from "@/lib/validations";

export function UsersForm({ user }: { user: SelectUser | null }) {
  const isUpdating = !!user;
  const [image, setImage] = useState<string | undefined>(undefined); // Local preview state
  const [pending, startTransition] = useTransition();

  // Memoize the schema to avoid recreating it on every render
  const UserFormSchema = useMemo(
    () => createUserFormSchema(isUpdating, false),
    [isUpdating]
  );

  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      userId: user?.id,
      password: "", //
      confirm_password: "", //
      avatar: undefined,
    },
  });

  const onSubmit = (values: UserFormValues) => {
    startTransition(async () => {
      const formdata = new FormData();

      if (values.userId) {
        formdata.set("userId", values.userId);
      }

      formdata.set("name", values.name);
      formdata.set("email", values.email);

      if (values.password) {
        formdata.set("password", values.password);
      }

      if (values.avatar instanceof File) {
        formdata.set("avatar", values.avatar);
      } else if (!isUpdating && !values.avatar) {
        console.error("Avatar is required for creation.");
        toast.error("Avatar is required to create a user account.");
        return;
      }

      const res = await createOrUpdateUser(formdata);

      if (res.status === "success") {
        toast.info(
          res.message ||
            (isUpdating
              ? "User updated successfully!"
              : "User created successfully!")
        );

        if (!isUpdating) {
          form.reset();
          setImage(undefined);
        } else {
          form.reset(
            {
              ...values,
              password: "",
              confirm_password: "",
              avatar: undefined,
            },
            { keepValues: true, keepDirty: false, keepDefaultValues: false }
          );
          setImage(undefined);
        }
      } else {
        toast.error(res.message || "An error occurred.");
      }
    });
  };

  // Determine current avatar source: local preview, existing user avatar, or null
  const currentAvatarSrc =
    image ?? (user?.avatar ? getSupabaseImagePath(user.avatar) : null);

  return (
    <form
      className=""
      onSubmit={form.handleSubmit(onSubmit, (err) =>
        console.error("Form Validation Errors:", err)
      )}
    >
      <div className="p-8 rounded-2xl border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                  censcope.com/
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="janesmith"
                  {...form.register("name")}
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                  censcope.com/
                </div>
                <input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="janesmith@example.com"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              {isUpdating ? "New Password (optional)" : "Password"}
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id="password"
                  type="password"
                  {...form.register("password")}
                  placeholder="********"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
              {form.formState.errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.password.message?.toString()}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="confirm_password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              {isUpdating ? "Confirm New Password" : "Confirm Password"}
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id="confirm_password"
                  type="password"
                  {...form.register("confirm_password")}
                  placeholder="********"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
              {form.formState.errors.confirm_password && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.confirm_password.message?.toString()}
                </p>
              )}
            </div>
          </div>

          {currentAvatarSrc && (
            <div className="col-span-full">
              <label className="block text-sm/6 font-medium text-gray-900">
                Current Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <div className="size-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    width={48}
                    height={48}
                    src={currentAvatarSrc}
                    alt="Current Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Remove button could be added here if needed, but AvatarUpload handles changing */}
                {/* If you want an explicit remove button *for the existing* avatar, add logic here */}
              </div>
            </div>
          )}

          <div className="col-span-full">
            <label
              htmlFor="file-upload"
              className="block text-sm/6 font-medium text-gray-900"
            >
              {isUpdating ? "Change Photo (optional)" : "Photo"}
            </label>
            <AvatarUpload
              control={form.control}
              name="avatar"
              handleImageChange={setImage}
            />
            {form.formState.errors.avatar && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.avatar.message?.toString()}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            disabled={pending || !form.formState.isDirty}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending
              ? `${isUpdating ? "Updating" : "Creating"}...`
              : `${isUpdating ? "Update User" : "Create User"}`}
          </button>
        </div>
      </div>
    </form>
  );
}
