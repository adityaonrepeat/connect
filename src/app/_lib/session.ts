import { cookies } from "next/headers";
import { UserType } from "../_types/user";

// Set session cookie
export const setSession = async (user: UserType) => {
  (await cookies()).set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
};

// Get session cookie
export const getSession = async (): Promise<UserType | null> => {
  const sessionCookie = (await cookies()).get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const user = JSON.parse(sessionCookie) as UserType;
    return user;
  } catch {
    return null; // In case cookie value is corrupted
  }
};

// Delete session cookie
export const deleteSession = async () => {
  const cookieStore = await cookies();
  (cookieStore).delete("session");
};  
