import { app } from "./FirebaseConfig.js";
import { getFirestore } from "firebase/firestore";

export const database = getFirestore(app);