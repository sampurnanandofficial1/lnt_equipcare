// ─── Claude Chatbot API Client ────────────────────────────────────────────────
import { logChatQuery, saveChatSession } from "./firebase";

export const sendMessage = async (messages, sessionId) => {
  const endpoint = import.meta.env.DEV
    ? "http://localhost:8888/.netlify/functions/chat"
    : "/.netlify/functions/chat";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, sessionId }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || "Failed to get response");
  }

  const data = await response.json();

  // Log query to Firebase
  const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
  if (lastUserMsg) await logChatQuery(lastUserMsg.content, sessionId);

  return data.reply;
};

export const generateSessionId = () =>
  `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
