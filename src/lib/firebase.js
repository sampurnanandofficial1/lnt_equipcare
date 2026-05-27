import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:     import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

export const initAnalytics = async () => {
  if (await isSupported()) return getAnalytics(app);
  return null;
};

export const saveChatSession = async (sessionData) => {
  try {
    const docRef = await addDoc(collection(db, "equipcare_chats"), {
      ...sessionData,
      createdAt: serverTimestamp(),
      source: "equipcare_website",
    });
    return docRef.id;
  } catch (e) {
    console.error("saveChatSession error:", e);
    return null;
  }
};

export const saveServiceRequest = async (requestData) => {
  try {
    const docRef = await addDoc(collection(db, "service_requests"), {
      ...requestData,
      status: "new",
      createdAt: serverTimestamp(),
      source: "equipcare_website",
    });
    return docRef.id;
  } catch (e) {
    console.error("saveServiceRequest error:", e);
    return null;
  }
};

export const logChatQuery = async (queryText, sessionId) => {
  try {
    await addDoc(collection(db, "chat_queries"), {
      query: queryText,
      sessionId,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.error("logChatQuery error:", e);
  }
};

export const savePartsEnquiry = async (enquiryData) => {
  try {
    const docRef = await addDoc(collection(db, "parts_enquiries"), {
      ...enquiryData,
      status: "pending",
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    console.error("savePartsEnquiry error:", e);
    return null;
  }
};
