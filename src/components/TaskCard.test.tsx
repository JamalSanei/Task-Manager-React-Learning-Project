import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import TaskCard from "./TaskCard";

const mockTask = {
  id: 1,
  title: "Task test",
  isDone: false,
};

function renderTaskCard(onToggle = vi.fn()) {
  return render(
    <MemoryRouter>
      <TaskCard task={mockTask} onToggle={onToggle} />
    </MemoryRouter>,
  );
}

test("Show Task Title", () => {
  renderTaskCard();
  expect(screen.getByText("Task test")).toBeInTheDocument();
});

test("onToggle is called when the button is clicked.", async () => {
  const onToggle = vi.fn();
  renderTaskCard(onToggle);

  await userEvent.click(screen.getByRole("button"));

  expect(onToggle).toHaveBeenCalledWith(1);
});

test("When isDone is true, it has a line on the title.", () => {
  render(
    <MemoryRouter>
      <TaskCard task={{ ...mockTask, isDone: true }} onToggle={vi.fn()} />
    </MemoryRouter>,
  );
  expect(screen.getByText("Task test")).toHaveClass("line-through");
});
