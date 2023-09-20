"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Spinner from "./components/Spinner";

const NavBar = () => {
  const { status, data: session } = useSession();

  const isAuth = status === "authenticated";

  return (
    <div className="flex space-x-3 p-5 bg-slate-300">
      <Link className="mr-5" href="/">
        Home
      </Link>
      <Link href="/admin">Admin</Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <Spinner />}
      {status === "authenticated" && <div>{session.user?.name}</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Log in</Link>
      )}
    </div>
  );
};

export default NavBar;
