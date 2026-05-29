import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Topbar() {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back to StudyOnly
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
      >
        Logout
      </button>

    </div>
  );
}

export default Topbar;