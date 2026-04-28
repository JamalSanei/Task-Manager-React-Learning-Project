import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

function TaskForm() {
  const { handleAdd } = useTasks();
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    handleAdd(title.trim());
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
