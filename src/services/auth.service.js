import { use } from "react";

export async function loginService(req) {
  const { email, password } = req;
  const user = {
    email,
    password,
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auths/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const loggedUser = await res.json();
    if (loggedUser.error == "unauthorized") {
      throw new Error("User does not exit!");
    }
    return loggedUser;
  } catch (error) {
    console.log("something error", error);
  }
}

export async function registerService(req) {
  const fullName = req.fullName.split(" ");
  const user = {
    firstName: fullName[0],
    lastName: fullName[1],
    email: req.email,
    password: req.password,
    birthDate: req.birthDate,
  };
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auths/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      },
    );
    const registeredUser = await res.json();

    return registeredUser;
  } catch (error) {
    console.log(error);
  }
}
