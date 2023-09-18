import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // Note caching only happens in fetch function
  // revalidate cache every 10 seconds
  let res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="font-bold">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
