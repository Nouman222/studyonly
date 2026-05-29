import { Link } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaBook,
  FaQuestionCircle,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white border-r min-h-screen p-6">

      <h1 className="text-3xl font-bold text-indigo-600 mb-10">
        StudyOnly
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/dashboard/notes"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50"
        >
          <FaBook />
          Notes Summary
        </Link>

        <Link
          to="/dashboard/quiz"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50"
        >
          <FaQuestionCircle />
          Quiz Generator
        </Link>

        <Link
          to="/dashboard/ai"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50"
        >
          <FaRobot />
          AI Assistant
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;