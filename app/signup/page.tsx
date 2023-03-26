"use client";

import React, { useState } from "react";
import signup from "@/lib/signup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Alert from "@/components/alert";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = await signup(email, password);
    if (user.user) {
      router.push("/");
    } else if (user.error) {
      if (user.error === "auth/email-already-in-use") {
        setError(false);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-200 flex h-2/5 bg-white flex-col w-4/5 md:w-1/5 justify-around items-center rounded-md"
      >
        <h1 className="text-2xl font-bold decoration-slate-900 underline ">
          Welcome
        </h1>
        <div className="flex justify-between items-center w-11/12">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-3/4 md:w-4/5 rounded-md p-4 h-11 border-2 border-gray-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center w-11/12">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Password (Atleast 8 characters)"
            className="w-3/4 md:w-4/5 rounded-md p-4 h-11 border-2 border-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 md:px-10 py-2 bg-white rounded-md border-gray-200 border-2"
        >
          Sign up{" "}
        </button>
        <h3>
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-300">
            {" "}
            Sign in{" "}
          </Link>
        </h3>
      </form>
      {error ? <Alert text="Email already in use" /> : null}
    </div>
  );
};

export default SignupPage;
