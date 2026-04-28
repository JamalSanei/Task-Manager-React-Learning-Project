import { TaskProvider } from "./contexts/TaskProvider";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Done from "./pages/Done";
import TaskDetail from "./pages/TaskDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TaskProvider>
          <nav>
            <Link to="/">All Tasks</Link>
            {" | "}
            <Link to="/done">Tasks Done</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/done" element={<Done />} />
            <Route path="/task/:id" element={<TaskDetail />} />
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
