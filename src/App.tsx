import { TaskProvider } from "./contexts/TaskProvider";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import AppRoutes from "./router";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-lg mx-auto flex gap-4">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors ${
            pathname === "/"
              ? "text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          All Tasks
        </Link>
        <Link
          to="/task/done"
          className={`text-sm font-medium transition-colors ${
            pathname === "/task/done"
              ? "text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Tasks Done
        </Link>
        <Link
          to="/task/api-tasks"
          className={`text-sm font-medium transition-colors ${
            pathname === "/task/api-tasks"
              ? "text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Api Tasks
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <TaskProvider>
          <div className="min-h-screen bg-gray-50">
            <AppRoutes />
            <Navbar />
          </div>
        </TaskProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
