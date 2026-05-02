import { TaskProvider } from "./contexts/TaskProvider";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TaskProvider>
          <AppRoutes />
          <nav>
            <Link to="/">All Tasks</Link>
            {" | "}
            <Link to="/task/done">Tasks Done</Link>
            {" | "}
            <Link to="/task/api-tasks">Api Tasks</Link>
          </nav>
        </TaskProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
