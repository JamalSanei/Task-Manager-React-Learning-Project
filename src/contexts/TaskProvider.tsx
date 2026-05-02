import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
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

  const handleToggle = useCallback((id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  }, []);

  const handleAdd = useCallback((title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      isDone: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const value = useMemo(
    () => ({ tasks, handleToggle, handleAdd }),
    [tasks, handleToggle, handleAdd],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
