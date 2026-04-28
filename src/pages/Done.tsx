import TaskCard from "../components/TaskCard";
import { useTasks } from "../hooks/useTasks";

export default function Done() {
  const { tasks, handleToggle } = useTasks();
  const doneTasks = tasks.filter((task) => task.isDone);
  return (
    <div>
      <h1>Tasks Done</h1>
      {doneTasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </div>
  );
}
