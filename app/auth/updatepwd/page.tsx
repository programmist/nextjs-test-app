import { authOptions } from "@/app/api/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const ChangePasswordPage = async ({
  searchParams: { error },
}: {
  searchParams: { error: string };
}) => {
  const session = await getServerSession(authOptions);
  const userEmail = session!.user!.email;

  async function changePassword(formData: FormData) {
    "use server";

    const newPassword = {
      email: userEmail,
      oldPassword: formData.get("oldPassword"),
      newPassword: formData.get("newPassword"),
    };

    const response = await fetch("http://localhost:3000/api/updatepwd", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPassword),
    });

    const body = await response.json();

    if (body.error) {
      const errors = Array.isArray(body.error)
        ? body.error.join("&")
        : body.error;

      redirect(`/auth/updatepwd?error=${errors}`);
    } else {
      redirect("/");
    }
  }

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Change Password
        </h1>
        <form action={changePassword} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              disabled
              value={userEmail!}
              name="email"
              type="string"
              placeholder="info@site.com"
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Old Password</span>
            </label>
            <input
              name="oldPassword"
              type="password"
              placeholder="Your Password"
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">New Password</span>
            </label>
            <input
              name="newPassword"
              type="password"
              placeholder="Your Password"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
