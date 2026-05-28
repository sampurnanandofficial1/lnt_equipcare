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

export const saveChatSession = async (data) => {
  try {
    const ref = await addDoc(collection(db, "equipcare_chats"), {
      ...data, createdAt: serverTimestamp(), source: "equipcare_website"
    });
    return ref.id;
  } catch (e) { console.error(e); return null; }
};

export const saveServiceRequest = async (data) => {
  try {
    const ref = await addDoc(collection(db, "service_requests"), {
      ...data, status: "new", createdAt: serverTimestamp(), source: "equipcare_website"
    });
    return ref.id;
  } catch (e) { console.error(e); return null; }
};

export const logChatQuery = async (query, sessionId) => {
  try {
    await addDoc(collection(db, "chat_queries"), {
      query, sessionId, timestamp: serverTimestamp()
    });
  } catch (e) { console.error(e); }
};

export const savePartsEnquiry = async (data) => {
  try {
    const ref = await addDoc(collection(db, "parts_enquiries"), {
      ...data, status: "pending", createdAt: serverTimestamp()
    });
    return ref.id;
  } catch (e) { console.error(e); return null; }
};
