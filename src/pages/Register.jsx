import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(
        formData.email,
        formData.password
      );

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your AI learning journey"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

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
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
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