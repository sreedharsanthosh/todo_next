"use client";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "./context/authcontext";
import { useRouter } from "next/navigation";
import newtodo from "@/lib/newtodo";
import get_todos from "@/lib/get_todos";
import { Trash2 } from "react-feather";
import delete_todo from "@/lib/delete";
import Homeform from "@/components/homeform";
import TodoItem from "@/components/todoitem";

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
      <Homeform
        onChange={(e: any) => setValue(e.target.value)}
        onSubmit={handleSubmit}
      />
      <ul className="w-full md:w-3/5">
        {data.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            onClick={() => {
              delete_todo("user", user.user.email, { value: todo.value });
              getDatas();
            }}
          />
        ))}
      </ul>
    </div>
  );
};
export default Home;
