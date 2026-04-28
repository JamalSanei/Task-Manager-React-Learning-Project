import { createContext } from "react";
import type { TaskContextType } from "../types/taskContext.type";

export const TaskContext = createContext<TaskContextType | null>(null);
