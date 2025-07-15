import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

  apiKey: "AIzaSyDLrynsdhtrJhsymUkW5_RuYgJj59GQi_U",
  authDomain: "whatisinpic2025.firebaseapp.com",
  projectId: "whatisinpic2025",
  storageBucket: "whatisinpic2025.firebasestorage.app",
  messagingSenderId: "908337117161",
  appId: "1:908337117161:web:8d348134789cff5d98fd78",
  measurementId: "G-H5LSVMRB3P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);