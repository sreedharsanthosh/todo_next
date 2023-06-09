"use client";
import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/lib/firebase";
import Loading from "@/components/Loading";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
}

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
