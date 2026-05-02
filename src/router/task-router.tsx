import { Route, Routes } from "react-router-dom";
import ApiTasks from "../pages/ApiTasks";
import TaskDetail from "../pages/TaskDetail";
import Done from "../pages/Done";

export default function TaskRouter() {
  return (
    <Routes>
      <Route path="/:id" element={<TaskDetail />} />
      <Route path="/api-tasks" element={<ApiTasks />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
}
