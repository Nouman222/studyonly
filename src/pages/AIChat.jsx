import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { askAI } from "../services/gemini";

import { saveChat, getChats } from "../services/chatService";

import { useAuth } from "../context/AuthContext";

function AIChat() {
  const { user } = useAuth();

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  // LOAD SAVED CHATS
  useEffect(() => {
    async function loadChats() {
      if (!user) return;

      const data = await getChats(user.uid);

      const formatted = data.flatMap((chat) => [
        {
          type: "user",
          text: chat.question,
        },
        {
          type: "ai",
          text: chat.answer,
        },
      ]);

      setMessages(formatted);
    }

    loadChats();
  }, [user]);

  // HANDLE AI QUESTION
  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      // USER MESSAGE
      const userMessage = {
        type: "user",
        text: question,
      };

      setMessages((prev) => [...prev, userMessage]);

      // CLEAR INPUT
      setQuestion("");

      // AI RESPONSE
      const response = await askAI(question);

      const aiMessage = {
        type: "ai",
        text: response,
      };

      setMessages((prev) => [...prev, aiMessage]);

      // SAVE CHAT
      await saveChat(user.uid, question, response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Study Assistant</h1>

        {/* CHAT BOX */}

        <div className="bg-white rounded-2xl shadow p-5 h-[500px] overflow-y-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              Start chatting with AI 🚀
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl max-w-[80%] whitespace-pre-wrap ${
                message.type === "user"
                  ? "bg-indigo-600 text-white ml-auto"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </div>
          ))}

          {loading && (
            <div className="bg-gray-200 text-black p-4 rounded-2xl max-w-[80%]">
              Thinking...
            </div>
          )}
        </div>

        {/* INPUT AREA */}

        <div className="flex gap-3 mt-5">
          <input
            type="text"
            placeholder="Ask anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-2xl disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AIChat;
