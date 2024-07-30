import Checkbox from "../Checkbox";

interface todoProps {
  todo: ITodoItem;
}

const TodoItem = ({ todo }: todoProps) => {
  return (
    <div className="flex items-center gap-3 border-b-2  p-2 w-full">
      <Checkbox checked={todo.completed} />
      <div
        className={`text-ellipsis text-wrap line-clamp-1 cursor-text ${
          todo.completed ? "line-through text-indigo-500" : ""
        }`}
      >
        {todo.content}
      </div>
    </div>
  );
};
export default TodoItem;
