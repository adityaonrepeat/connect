"use server";
import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async(formData: FormData) => {

    try {
        const response = await axios.get(
            `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
        )

        const user: UserType = response.data[0];
        if (!user) {throw new Error("Invalid credentials");}

        //set user in the cookies
        await setSession({name: user.name , email: user.email , id: user.id });

    } catch (error) {

        throw new Error("Failed to login");
    }
    redirect("/contacts");
};



export const logoutAction = async() => {
    //clear user from cookies
    await deleteSession();
    redirect("/login");
}


export const registerAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  try {
    // 🔍 1. Check if user already exists
    const existingUserRes = await axios.get(
      `${API_URL}/users?email=${email}`
    );

    const existingUser: UserType | undefined = existingUserRes.data[0];

    if (existingUser) {
      throw new Error("Email already registered");
    }

    // 🧾 2. Create new user
    const createUserRes = await axios.post(`${API_URL}/users`, {
      name,
      email,
      password,
    });

    const newUser: UserType = createUserRes.data;

    // 🍪 3. Set session (auto-login after register)
    await setSession({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });

  } catch (error) {
    throw new Error("Failed to register");
  }

  // 🚀 4. Redirect to contacts
  redirect("/contacts");
};