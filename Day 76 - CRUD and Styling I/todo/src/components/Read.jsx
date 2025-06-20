import React from "react";
import { toast } from "react-toastify";

const Read = ({ task, setTask }) => {
  const renderTask = task.map((task, id) => (
    <li key={id} className="text-white font-semibold">
      {task.title}
      <span
        className="text-white bg-red-500 ml-2 cursor-pointer text-xs px-2 py-1 rounded-md"
        onClick={() => deleteTask(id)}
      >
        Delete
      </span>
    </li>
  ));

  const deleteTask = (id) => {
    const filteredTasks = task.filter((_, index) => index !== id);
    setTask(filteredTasks);
    toast.warning("Task Deleted Successfully")
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Tasks to Completed</h1>

      <div className="tasks text-black">
        <ol className="list-disc list-inside space-y-2">
          {task.length === 0 && (
            <p className="text-sm text-zinc-500 font-semibold">No Task Found</p>
          )}
          {task.length > 0 && renderTask}
        </ol>
      </div>
    </>
  );
};

export default Read;