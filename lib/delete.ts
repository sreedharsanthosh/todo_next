import firebase_app from "./firebase";
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
  arrayRemove,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function delete_todo(collection, id, data) {
  await updateDoc(doc(db, collection, id), {
    todos: arrayRemove(data),
  });
}
