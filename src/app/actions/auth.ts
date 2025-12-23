"use server";
import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";
//process.env.API_URL || 

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
