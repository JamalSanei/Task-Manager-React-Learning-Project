import { useEffect, useState } from "react";
import type { Task } from "./types/task";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "یادگیری JSX", isDone: true },
          { id: 2, title: "یادگیری Props & State", isDone: false },
        ];
  });
  function handleToggle(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  }

  function handleAdd(title: string) {
    const newTask: Task = {
      id: Date.now(),
      isDone: false,
      title: title,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <TaskForm onAdd={handleAdd} />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </div>
  );
}

export default App;
