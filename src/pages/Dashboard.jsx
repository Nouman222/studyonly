import DashboardLayout from "../layouts/DashboardLayout";
import Topbar from "../components/layout/Topbar";

function Dashboard() {
  return (
    <DashboardLayout>

      <Topbar />

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white p-6 rounded-3xl shadow-sm border hover:shadow-md transition">
          <h2 className="text-2xl font-bold">
            Notes Summary
          </h2>

          <p className="mt-3 text-gray-600">
            Upload notes and generate AI summaries instantly.
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-xl">
            Open Tool
          </button>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border hover:shadow-md transition">
          <h2 className="text-2xl font-bold">
            Quiz Generator
          </h2>

          <p className="mt-3 text-gray-600">
            Create quizzes from your study materials.
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-xl">
            Generate Quiz
          </button>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border hover:shadow-md transition">
          <h2 className="text-2xl font-bold">
            AI Assistant
          </h2>

          <p className="mt-3 text-gray-600">
            Ask questions and learn smarter with AI.
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-xl">
            Chat with AI
          </button>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;