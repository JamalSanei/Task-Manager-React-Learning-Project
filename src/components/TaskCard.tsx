import type { Task } from "../types/task.type";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
}

function TaskCard({ task, onToggle }: Props) {
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.isDone ? "✓" : "○"}
      </button>
    </div>
  );
}

export default TaskCard;
