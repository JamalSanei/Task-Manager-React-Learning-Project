// src/pages/Home.tsx
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../hooks/useTasks";

export default function Home() {
  const { tasks, handleToggle } = useTasks();
  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Tasks</h1>
      <TaskForm />{" "}
      <div className="flex flex-col gap-3">
        {tasks.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-8">
            You haven't task yet...!!!
          </p>
        )}
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}
