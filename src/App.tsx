import { useState } from "react";
import type { Task } from "./types/task";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "یادگیری JSX", isDone: true },
    { id: 2, title: "یادگیری Props & State", isDone: false },
  ]);

  function handleToggle(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </div>
  );
}

export default App;
