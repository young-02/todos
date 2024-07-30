import CircleButton from "../Button/CircleButton";
import Checkbox from "../Checkbox";
import TodoInput from "../TodoInput";

interface todoProps {
  todo: ITodoItem;
  checkTodo: () => void;
  editModeTodo: () => void;
  editTodo: (todo: string) => void;
  deleteTodo: () => void;
}

const TodoItem = ({
  todo,
  checkTodo,
  editModeTodo,
  editTodo,
  deleteTodo,
}: todoProps) => {
  return (
    <div className="group min-h-14 flex items-center gap-3 border-b-2 p-2 w-full">
      <Checkbox checked={todo.completed} onClick={() => checkTodo()} />

      {todo.editing ? (
        <TodoInput
          editTodo={(todo: string) => {
            editTodo(todo);
            editModeTodo();
          }}
          isEditing={true}
          editContent={todo.content}
        />
      ) : (
        <div
          onClick={() => editModeTodo()}
          className={`text-ellipsis text-wrap line-clamp-1 cursor-text  w-[80%] flex-1 ${
            todo.completed ? "line-through text-indigo-500" : ""
          }`}
        >
          {todo.content}
        </div>
      )}

      <CircleButton onClick={() => deleteTodo()} Icon={"삭제"} />
    </div>
  );
};
export default TodoItem;
