import Link from "next/link";
import { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1 className="font-bold">Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense
        fallback={<p className="loading loading-spinner block">Loading...</p>}
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
