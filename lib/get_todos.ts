import firebase_app from "./firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function get_todos(collection, id) {
  const docRef = await doc(db, collection, id);
  let result = null,
    error = null;

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    result = docSnap.data();
  } else {
    console.log("No such document!");
  }

  return { result, error };
}
