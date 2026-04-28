import { useEffect, useState, type ReactNode } from "react";
import type { Task } from "../types/task.type";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      title,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <TaskContext.Provider value={{ tasks, handleToggle, handleAdd }}>
      {children}
    </TaskContext.Provider>
  );
}
