import type { Task } from "./task.type";

export interface TaskContextType {
  tasks: Task[];
  handleToggle: (id: number) => void;
  handleAdd: (title: string) => void;
}
