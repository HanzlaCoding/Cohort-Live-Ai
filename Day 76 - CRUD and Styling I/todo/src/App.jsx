import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [task, setTask] = useState([]);

  const getTask = (taskname) => setTask((prev) => [...prev, { title: taskname }]);

  return (
    <>
      <main className="w-full min-h-screen p-8 bg-gray-800 text-white font-['Helvetica_Now_Display'] flex flex-col items-center justify-center rounded-lg shadow-xl">
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg">
          <Create getTask={getTask} />
          <Read task={task} setTask={setTask} />
        </div>
      </main>
    </>
  );
};

export default App;