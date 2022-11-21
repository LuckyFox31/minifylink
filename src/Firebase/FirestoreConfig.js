import { app } from "./FirebaseConfig.js";
import {getFirestore, setDoc, getDocs, doc, collection} from "firebase/firestore";
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

export async function getLinksByUser(userID){
	return await getDocs(collection(database, userID))
		.then(res => {
			const data = [];
			res.forEach(doc => {
				data.push(doc.data())
			})
			data.sort((x, y) => {
				return y.timestamp - x.timestamp;
			})
			return data;
		});
}