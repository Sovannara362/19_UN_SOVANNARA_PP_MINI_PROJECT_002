"use server";

import { registerService } from "../services/auth.service";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
export async function RegisterAction(data) {
    const { fullName, email, password, birthdate } = data;
    const user ={
      fullName: fullName,
      email: email,
      password: password,
      birthDate: birthdate
    }
  console.log("user in action: ", user);

  try {
    const res = await registerService(user);

    if (res.status !== "201 CREATED") {
      const errorData = await res.json();
      throw new Error(errorData.message || "Register failed");
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