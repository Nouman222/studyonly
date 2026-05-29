import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(
        formData.email,
        formData.password
      );

      navigate("/dashboard");

    } catch (error) {

      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      }

      else if (
        error.code === "auth/wrong-password"
      ) {
        setError("Incorrect password.");
      }

      else if (
        error.code === "auth/invalid-email"
      ) {
        setError("Invalid email address.");
      }

      else if (
        error.code === "auth/invalid-credential"
      ) {
        setError("Email or password is incorrect.");
      }
      else if (
  error.message ===
  "Please verify your email first."
) {
  setError(
    "Please verify your email before login."
  );
}

      else {
        setError("Something went wrong.");
      }
      

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue learning"
    >

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-xl">
            {error}
          </div>
        )}

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="text-right">

  <Link
    to="/forgot-password"
    className="text-indigo-600 hover:underline"
  >
    Forgot Password?
  </Link>

</div>

        <button
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </AuthLayout>
  );
}

export default Login;