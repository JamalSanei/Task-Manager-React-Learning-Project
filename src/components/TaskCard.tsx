import { Link } from "react-router-dom";
import type { Task } from "../types/task.type";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
}

function TaskCard({ task, onToggle }: Props) {
  return (
    <div>
      <Link to={`/task/${task.id}`}>{task.title}</Link>
      <button onClick={() => onToggle(task.id)}>
        {task.isDone ? "✓" : "○"}
      </button>
    </div>
  );
}

export default TaskCard;
