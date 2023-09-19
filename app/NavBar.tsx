import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex p-5 bg-slate-300">
      <Link className="mr-5" href="/">
        Home
      </Link>
      <Link className="mr-2" href="/admin">
        Admin
      </Link>
      <Link className="mr-2" href="/users">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
