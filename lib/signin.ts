import firebase_app from "./firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signin(email: string, password: string) {
  let result = null,
    error = null,
    userEmail = null;
  await signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      result = res.user;
      userEmail = res.user.email;
    })
    .catch((err) => {
      error = err.code;
    });

  return { result, error, userEmail };
}
