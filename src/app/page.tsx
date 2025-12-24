import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center -mt-25">
      {/* App Name */}
      <h1 className="text-5xl font-bold mb-4 pb-0.5">
        Connect
      </h1>

      {/* Tagline */}
      <p className="text-gray-600 max-w-xl mb-8">
        Connect is a simple and secure contact manager that helps you store,
        organize, and manage your contacts effortlessly.
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <Link
          href="/contacts"
          className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition"
        >
          View Contacts
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
