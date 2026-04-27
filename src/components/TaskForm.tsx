import { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
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
