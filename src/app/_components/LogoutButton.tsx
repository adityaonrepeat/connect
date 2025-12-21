import Link from "next/link";
import React from "react";

const LogoutButton = () => {
  return (
    <div >
        <Link href="/logout" className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition">
          Logout
        </Link>
    </div>
  );
};

export default LogoutButton;