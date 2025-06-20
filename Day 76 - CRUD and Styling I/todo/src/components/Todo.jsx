import React from "react";
import { useContext } from "react";
import Create from "./Create";
import Read from "./Read";
import { todoContext } from "../Wrapper";
import { nanoid } from "nanoid";

const Todo = () => {
  const todoCont = useContext(todoContext);
  const [task, setTask] = todoCont;
  console.log(task);

  const getTask = (taskname) =>
    setTask((prev) => [
      ...prev,
      { id: nanoid(), title: taskname, completed: false },
    ]);

  return (
    <>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg">
          <Create getTask={getTask} />
          <Read />
        </div>
      </main>
    </>
  );
};

export default Todo;
