"use server";

import { registerService } from "../services/auth.service";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
export async function RegisterAction(data) {
  const { name, email, password, birthdate } = data;
  const user = {
    fullName: name,
    email: email,
    password: password,
    birthDate: birthdate,
  };

  try {
    const res = await registerService(user);

    if (res.status !== "201 CREATED") {
      throw new Error(res.message || "Register failed");
    }

    redirect("/login");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("Register error:", error);
    return { error: error.message };
  }
}
