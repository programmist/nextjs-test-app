"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Spinner from "./components/Spinner";
import "./NavBar.css";

const NavBar = () => {
  const { status, data: session } = useSession();

  const isAuth = status === "authenticated";

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className="flex space-x-3 p-5 bg-slate-300">
      <Link className="mr-5" href="/">
        Home
      </Link>
      <Link href="/admin">Admin</Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <Spinner />}
      {status === "authenticated" && (
        <>
          <div>{session.user?.name}</div>
          <Link href="/api/auth/signout">Sign Out</Link>
        </>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Log in</Link>
      )}
      <Link href="/register">Register</Link>
      <div>
        Color Mode:
        <span className="light-mode">Light</span>
        <span className="dark-mode">Dark</span>
      </div>
    </div>
  );
};

export default NavBar;
