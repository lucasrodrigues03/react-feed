import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSNDERID,             
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
}
console.log(config)
// Initialize Firebase
const app = initializeApp(config);
const analytics = getDatabase(app);


