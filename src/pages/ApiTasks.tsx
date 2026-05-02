import { useFetch } from "../hooks/useFetch";

interface ApiTask {
  id: number;
  title: string;
  completed: boolean;
}

export default function ApiTasks() {
  const { data, loading, error } = useFetch<ApiTask[]>(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
  );
  console.log("call api task....");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <div>
      <h1>API Tasks</h1>
      {data.map((task) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <span>{task.completed ? "✓" : "○"}</span>
        </div>
      ))}
    </div>
  );
}
