// src/pages/Home.tsx
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../hooks/useTasks";

export default function Home() {
  const { tasks, handleToggle } = useTasks();
  return (
    <div>
      <h1>All Tasks</h1>
      <TaskForm />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </div>
  );
}
