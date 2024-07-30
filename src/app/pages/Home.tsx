import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  editTodo,
  editModeTodo,
} from "../../store/slice/todo";

const Home = () => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <div className="w-[400px] h-[600px] p-4 bg-white">
      <h1 className="text-4xl font-bold">할일</h1>

      <TodoInput addTodo={(content: string) => dispatch(addTodo(content))} />

      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          checkTodo={() => dispatch(checkTodo({ id: todo.id }))}
          editModeTodo={() => dispatch(editModeTodo({ id: todo.id }))}
          editTodo={(content: string) =>
            dispatch(editTodo({ id: todo.id, content }))
          }
          deleteTodo={() => dispatch(deleteTodo({ id: todo.id }))}
        />
      ))}
    </div>
  );
};
export default Home;
