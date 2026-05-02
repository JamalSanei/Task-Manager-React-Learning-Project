import { Route, Routes } from "react-router-dom";
import TaskRouter from "./task-router";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/*" element={<TaskRouter />} />
    </Routes>
  );
}
