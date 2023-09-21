import { redirect } from "next/navigation";

const UserRegistrationPage = ({
  searchParams: { error },
}: {
  searchParams: { error: string };
}) => {
  async function registerUser(formData: FormData) {
    "use server";

    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await fetch("http://localhost:3000/api/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const body = await response.json();

    if (body.error) {
      redirect(`/register?error=${body.error}`);
    } else {
      redirect("/api/auth/signin");
    }
  }

  // FIXME: CSS is inserting div component after input elements causing hydration issue
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          New User
        </h1>
        <form action={registerUser} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              autoComplete="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              autoComplete="email"
              name="email"
              type="email"
              placeholder="info@site.com"
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              autoComplete="password"
              name="password"
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

export default UserRegistrationPage;
