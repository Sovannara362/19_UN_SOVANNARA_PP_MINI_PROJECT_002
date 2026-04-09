"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginAction } from "../../../action/login.action";
export default function LoginFormComponent() {
  const [submitError, setSubmitError] = useState("");

  const loginSchema = z.object({
    email: z.email("Please enter the valid email form"),
    password: z.string().min(8, "Password at least 8 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await loginAction(data);
      console.log("this is in onsubmit ;", res);
      return res;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {submitError && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {submitError}
        </div>
      )}

      <div>
        <label
          htmlFor="login-email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ring-lime-400/20  ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-400"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
          className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ring-lime-400/20  ${
            errors.password
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-400"
          }`}
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="mt-1.5 text-xs text-red-600">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        isDisabled={isSubmitting}
        variant="solid"
        className="w-full rounded-full bg-lime-400 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-lime-300"
      >
        {isSubmitting ? "Sign in..." : "Sign in"}
      </Button>
    </form>
  );
}
