import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import { useTasks } from "./hooks/useTasks";
import { TaskProvider } from "./contexts/TaskProvider";

function TaskList() {
  const { tasks, handleToggle } = useTasks();
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </>
  );
}
function App() {
  return (
    <div>
      <TaskProvider>
        <div>
          <h1>Task Manager</h1>
          <TaskForm />
          <TaskList />
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
