"use client";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "./context/authcontext";
import { useRouter } from "next/navigation";
import newtodo from "@/lib/newtodo";
import get_todos from "@/lib/get_todos";
import { Trash2 } from "react-feather";
import delete_todo from "@/lib/delete";

const Home = () => {
  const user = useAuthContext();
  const router = useRouter();
  const [data, setData] = useState([]);
  React.useEffect(() => {
    if (user.user == null) {
      router.push("/signin");
    }
  }, [user]);

  const [value, setValue] = useState("");

  const getDatas = async () => {
    await newtodo("user", user.user.email, { value: value });
    get_todos("user", user.user.email)
      .then((res) => {
        if (res.result) {
          setData(res.result.todos.reverse());
        }
      })
      .catch((err) => console.log(err));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    getDatas();
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="h-screen flex p-4 flex-col items-center">
      <div className="w-full md:w-3/5 bg-red-500 px-4 py-6 rounded-lg">
        <form onSubmit={handleSubmit} className="flex justify-around">
          <input
            className="w-3/4 md:w-4/5 rounded-md p-4 h-11"
            type="text"
            required
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="px-4 md:px-10 md:text-xl py-2 bg-white rounded-md "
            type="submit"
          >
            New
          </button>
        </form>
      </div>
      <ul className="w-full md:w-3/5">
        {data.map((todo, index) => (
          <li
            className="px-6 py-4 bg-gray-200 rounded-md my-4 w-full flex justify-between items-center"
            key={index}
          >
            {todo.value}
            <button
              onClick={() => {
                delete_todo("user", user.user.email, { value: todo.value });
                getDatas();
              }}
              className="bg-red-500 rounded-md p-2"
            >
              <Trash2 className="text-slate-100" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
