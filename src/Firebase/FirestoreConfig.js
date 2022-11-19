import { app } from "./FirebaseConfig.js";
import {getFirestore, setDoc, doc} from "firebase/firestore";
import { v4 as uuid } from 'uuid';

const database = getFirestore(app);

export async function saveLink(originalLink, userID){
	const minifiedLink = uuid().slice(0,8);
	const docData = {
		originalLink: originalLink,
		minifiedLink: minifiedLink,
		timestamp: Date.now(),
	}
	const linksRoute = doc(database, userID, minifiedLink);
	return await setDoc(linksRoute, docData);
}