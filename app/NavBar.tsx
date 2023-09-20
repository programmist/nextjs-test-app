import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex space-x-3 p-5 bg-slate-300">
      <Link className="mr-5" href="/">
        Home
      </Link>
      <Link href="/admin">Admin</Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Log in</Link>
    </div>
  );
};

export default NavBar;
