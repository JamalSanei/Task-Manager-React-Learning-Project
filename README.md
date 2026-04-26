# Task Manager — React Learning Project

A simple task manager app built step by step while learning React + TypeScript.

Each commit corresponds to a learning milestone on the roadmap.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS

## Setup

```bash
# Create project
npm create vite@latest task-manager -- --template react-ts

cd task-manager
npm install

# Start dev server
npm run dev
```

## Learning Milestones (Commits)

| #   | Topic            | What gets added            |
| --- | ---------------- | -------------------------- |
| 1   | JSX & Components | `TaskCard` component       |
| 2   | Props & State    | Add/remove tasks           |
| 3   | Hooks            | useEffect for localStorage |
| 4   | Events & Forms   | Task input form            |
| 5   | Context          | Global task state          |
| 6   | Routing          | Pages: Home, Done, Detail  |
| 7   | Data Fetching    | Fetch from a mock API      |
| 8   | Performance      | useMemo, useCallback       |
| 9   | Styling          | Tailwind UI polish         |
| 10  | Testing          | Basic component tests      |

## Project Structure (final)

```
src/
├── components/
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   └── TaskList.tsx
├── pages/
│   ├── Home.tsx
│   ├── Done.tsx
│   └── TaskDetail.tsx
├── context/
│   └── TaskContext.tsx
├── hooks/
│   └── useTasks.ts
├── types/
│   └── task.ts
└── App.tsx
```
