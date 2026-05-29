import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import { askAI } from "../services/gemini";

function AIChat() {

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {

    if (!question) return;

    try {

      setLoading(true);

      const response = await askAI(question);
      console.log(response);

      setAnswer(response);

    } catch (error) {

      console.log(error);

setAnswer(
  "Something went wrong while generating response."
);

    } finally {

      setLoading(false);

    }
  };

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold">
        AI Study Assistant
      </h1>

      <div className="mt-8 bg-white p-6 rounded-3xl shadow-sm">

        <textarea
          placeholder="Ask anything about your studies..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          className="w-full border rounded-2xl p-4 h-40 outline-none"
        />

        <button
          onClick={handleAsk}
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {answer && (
          <div className="mt-8 bg-gray-100 p-6 rounded-2xl whitespace-pre-wrap">
            {answer}
          </div>
        )}

      </div>

    </DashboardLayout>
  );
}

export default AIChat;