import firebase_app from "./firebase";
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
  arrayUnion,
  setDoc,
  arrayRemove,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function newtodo(collection, id, data) {
  let result = null,
    error = null;
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await updateDoc(doc(db, collection, id), {
      todos: arrayUnion(data),
    });
  } else {
    await setDoc(doc(db, collection, id), { todos: [data] }, { merge: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
