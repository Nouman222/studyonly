import AuthLayout from "../layouts/AuthLayout";

function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your AI learning journey"
    >

      <form className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium">
          Create Account
        </button>

      </form>

    </AuthLayout>
  );
}

export default Register;