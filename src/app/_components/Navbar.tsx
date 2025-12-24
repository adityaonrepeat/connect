import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";
import { Users } from "lucide-react";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition"
        >
          <Users className="h-6 w-6" />
          Connect
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Link
                href="/contacts"
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Contacts
              </Link>

              {/* Logout button should look like a button */}
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md
                           hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md
                           hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
