// ─── Claude Chatbot API Client — Firebase Cloud Functions ─────────────────────
import { logChatQuery } from "./firebase";

const FIREBASE_PROJECT = import.meta.env.VITE_FIREBASE_PROJECT_ID;

// Firebase Cloud Function URL — Mumbai region (asia-south1) for low latency
const getFunctionUrl = () => {
  if (import.meta.env.DEV) {
    // Local emulator
    return "http://127.0.0.1:5001/lntcmmb-intelligence/asia-south1/chat";
  }
  return `https://chat-${FIREBASE_PROJECT}-asia-south1.a.run.app`;
};

export const sendMessage = async (messages, sessionId) => {
  const url = getFunctionUrl();

  const response = await fetch(url, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ messages, sessionId }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to get response from Equipcare AI");
  }

  const data = await response.json();

  // Log to Firestore analytics
  const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
  if (lastUserMsg) await logChatQuery(lastUserMsg.content, sessionId);

  return data.reply;
};

export const generateSessionId = () =>
  `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
