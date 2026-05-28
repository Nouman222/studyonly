import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b bg-white sticky top-0 z-50">
      
      <Link to="/" className="text-3xl font-bold text-indigo-600">
        StudyOnly
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#features">Features</a>
        <a href="#about">About</a>

        <Link
          to="/login"
          className="text-gray-700 hover:text-indigo-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;