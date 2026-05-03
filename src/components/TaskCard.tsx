import { Link } from "react-router-dom";
import type { Task } from "../types/task.type";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
}

function TaskCard({ task, onToggle }: Props) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <Link
        to={`/task/${task.id}`}
        className={`flex-1 text-sm ${task.isDone ? "line-through text-gray-400" : "text-gray-700"}`}
      >
        {task.title}
      </Link>
      <button
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          task.isDone
            ? "bg-green-500 border-green-500 text-white"
            : "border-gray-300 hover:border-green-400"
        }`}
      >
        {task.isDone ? "✓" : "○"}
      </button>
    </div>
  );
}

export default TaskCard;
