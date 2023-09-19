import React from "react";
import UserTable from "./UserTable";

const UsersPage = () => {
  // Note caching only happens in fetch function
  // revalidate cache every 10 seconds

  return (
    <>
      <h1 className="font-bold">Users</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;
