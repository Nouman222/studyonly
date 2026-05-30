import {
  FaHome,
  FaRobot,
  FaStickyNote,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Sidebar() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout =
    async () => {

      try {

        await logout();

        navigate("/login");

      } catch (error) {

        console.log(error);
      }
    };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 flex flex-col">

      {/* LOGO */}

      <h1 className="text-3xl font-bold text-indigo-600 mb-10">
        StudyOnly
      </h1>

      {/* NAVIGATION */}

      <div className="flex flex-col gap-3 flex-1">

        <NavLink
          to="/dashboard"
          end
          className={navClass}
        >
          <FaHome />

          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/ai"
          className={navClass}
        >
          <FaRobot />

          AI Assistant
        </NavLink>

        <NavLink
          to="/dashboard/notes"
          className={navClass}
        >
          <FaStickyNote />

          Notes
        </NavLink>

        <NavLink
          to="/dashboard/quiz"
          className={navClass}
        >
          <FaQuestionCircle />

          Quiz Generator
        </NavLink>

      </div>

      {/* LOGOUT */}

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
      >

        <FaSignOutAlt />

        Logout

      </button>

    </div>
  );
}

export default Sidebar;