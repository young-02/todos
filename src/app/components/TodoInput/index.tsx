import { useState } from "react";

interface SetTodoListProp {
  addTodo?: (content: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (todo: string) => void;
}

const TodoInput = ({
  addTodo,
  isEditing,
  editTodo,
  editContent,
}: SetTodoListProp) => {
  const [content, setContent] = useState<string>(editContent || "");

  return (
    <div className={`py-2 ${isEditing && "p-2 "}`}>
      <input
        className={`w-full border-b-2 outline-0 p-1 `}
        value={content}
        onBlur={(e) => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할일을 입력해 주세요"
        onKeyUp={(e) => {
          if (content === "") return;
          if (e.key !== "Enter" && e.key !== "NumpadEnter") return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            addTodo && addTodo(content);
          }
          setContent("");
        }}
      />
    </div>
  );
};

export default TodoInput;
