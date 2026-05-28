import Navbar from "../components/layout/Navbar";
import { FaRobot, FaBookOpen, FaBrain } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-24 text-center">
        
        <p className="text-indigo-600 font-semibold mb-4">
          AI-Powered Learning Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
          Learn Smarter <br /> with AI
        </h1>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          StudyOnly helps students summarize notes, generate quizzes,
          and learn faster using powerful AI tools.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-medium">
            Start Learning
          </button>

          <button className="border px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-100">
            Explore Features
          </button>

        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="px-6 md:px-12 py-20 bg-gray-50"
      >
        
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Powerful AI Study Tools
          </h2>

          <p className="mt-4 text-gray-600">
            Everything students need in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <FaBookOpen className="text-4xl text-indigo-600" />

            <h3 className="text-2xl font-bold mt-6">
              AI Notes Summary
            </h3>

            <p className="mt-4 text-gray-600">
              Upload notes and instantly generate clean summaries.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <FaBrain className="text-4xl text-indigo-600" />

            <h3 className="text-2xl font-bold mt-6">
              Quiz Generator
            </h3>

            <p className="mt-4 text-gray-600">
              Create smart quizzes and test your knowledge instantly.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <FaRobot className="text-4xl text-indigo-600" />

            <h3 className="text-2xl font-bold mt-6">
              AI Study Assistant
            </h3>

            <p className="mt-4 text-gray-600">
              Ask questions and learn with your personal AI tutor.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;