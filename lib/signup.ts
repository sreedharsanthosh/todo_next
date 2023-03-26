import firebase_app from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signup(email: string, password: string) {
  let user = null,
    error = null;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      user = res.user;
    })
    .catch((err) => {
      error = err.code;
    });
  return { user, error };
}
