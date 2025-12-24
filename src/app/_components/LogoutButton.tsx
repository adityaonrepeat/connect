"use client";
import Link from "next/link";
import React from "react";
import { logoutAction } from "../actions/auth";
import { redirect } from "next/navigation";



const LogoutButton = () => {

  const handleLogout = async () => {
    try{
      await logoutAction();
      redirect('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    } 
  };

  return (
    <div >
        <button onClick={handleLogout} className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition">
          Logout
        </button>
    </div>
  );
};

export default LogoutButton;


