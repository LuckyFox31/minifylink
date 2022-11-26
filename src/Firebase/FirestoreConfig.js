import { app } from "./FirebaseConfig.js";
import {getFirestore, setDoc, doc, collection} from "firebase/firestore";
import { v4 as uuid } from 'uuid';

export const database = getFirestore(app);

export const linksCollectionRef = collection(database, 'links');

export async function saveLink(originalLink, userID){
	const minifiedLink = uuid().slice(0,8);
	const docData = {
		createdBy: userID,
		originalLink: originalLink,
		minifiedLink: minifiedLink,
		timestamp: Date.now(),
	}
	const linksRoute = doc(database, 'links', minifiedLink);
	return await setDoc(linksRoute, docData)
		.then(() => {
			return docData;
		});
}

