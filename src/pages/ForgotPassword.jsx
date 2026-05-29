import { useState } from "react";

import AuthLayout from "../layouts/AuthLayout";

import { useAuth } from "../context/AuthContext";

function ForgotPassword() {

  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    setLoading(true);

    try {

      await resetPassword(email);

      setSuccess(
        "Password reset email sent. Please check your inbox."
      );

    } catch (error) {

      if (
        error.code === "auth/user-not-found"
      ) {

        setError(
          "No account found with this email."
        );

      }

      else if (
        error.code === "auth/invalid-email"
      ) {

        setError(
          "Invalid email address."
        );

      }

      else {

        setError(
          "Something went wrong."
        );
      }

    } finally {

      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Reset your password"
    >

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-xl">
            {success}
          </div>
        )}

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
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium disabled:opacity-50"
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

      </form>

    </AuthLayout>
  );
}

export default ForgotPassword;