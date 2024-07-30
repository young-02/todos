import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    {
      id: "1",
      completed: false,
      content: "투두1투두1투두1투두1투두1투두1",
      editing: false,
    },
    {
      id: "2",
      completed: true,
      content: "투두1투두1투두",
      editing: false,
    },
    {
      id: "3",
      completed: false,
      content: "투두1투두1투두1투두1투두1투두1투두1투두1투두1투두1",
      editing: false,
    },
  ]);
  return (
    <div className="w-[400px] h-[600px] p-4 bg-white">
      <h1 className="text-4xl font-bold">할일</h1>

      <TodoInput
        setTodoList={(todo: ITodoItem) => setTodoList([todo, ...todoList])}
      />

      {todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};
export default Home;
