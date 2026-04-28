import { useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useTasks();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return <p>تسک پیدا نشد</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>State: {task.isDone ? "✓ Done" : "○ Note Done"}</p>
    </div>
  );
}
