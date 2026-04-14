"use client";

import { Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterAction } from "../../../action/register.action";
import { useState } from "react";

export default function RegisterFormComponent() {
  const [submitError, setSubmitError] = useState("");

  const registerSchema = z.object({
    name: z.string().min(1, "Please input the full name"),
    email: z.email("Please enter a valid email"),
    password: z.string().min(8, "Password at least 8 characters"),
    birthdate: z.iso.date(1, "Please input valid birth date"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      birthdate: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    setSubmitError("");

    try {
      const res = await RegisterAction(data);

      if (res?.error) {
        setSubmitError(res.error);
      }
    } catch (error) {
      setSubmitError("Something went wrong");
      console.error("Register failed:", error);
    }
  };

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>

      {submitError && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {submitError}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full name
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="Jane Doe"
          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${
            errors.name
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-200 focus:ring-2 focus:ring-lime-400"
          }`}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${
            errors.email
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-200 focus:ring-2 focus:ring-lime-400"
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          placeholder="••••••••"
          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${
            errors.password
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-200 focus:ring-2 focus:ring-lime-400"
          }`}
        />
        {errors.password && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Birthdate */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Birthdate
        </label>
        <input
          type="date"
          {...register("birthdate")}
          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${
            errors.birthdate
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-200 focus:ring-2 focus:ring-lime-400"
          }`}
        />
        {errors.birthdate && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.birthdate.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        isDisabled={isSubmitting}
        variant="solid"
        className="w-full rounded-full bg-lime-400 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-lime-300"
      >
        {isSubmitting ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
