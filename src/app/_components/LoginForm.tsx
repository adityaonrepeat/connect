"use client";

import { loginAction } from "../actions/auth";

const LoginForm = () => {
  return (
    <form action={loginAction} className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                     shadow-sm focus:border-blue-500 focus:outline-none
                     focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                     shadow-sm focus:border-blue-500 focus:outline-none
                     focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white
                   hover:bg-blue-700 transition"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
