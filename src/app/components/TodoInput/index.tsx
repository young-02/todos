import { useState } from "react";

interface SetTodoListProp {
  setTodoList: (todo: ITodoItem) => void;
}

const TodoInput = ({ setTodoList }: SetTodoListProp) => {
  const [content, setContent] = useState<string>("");

  return (
    <div className="py-2">
      <input
        className="w-full border-b-2 outline-0 p-1"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할일을 입력해 주세요"
        onKeyUp={(e) => {
          if (content === "") return;
          if (e.key !== "Enter" && e.key !== "NumpadEnter") return;
          setTodoList({
            id: "0",
            content,
            completed: false,
            editing: false,
          });
          setContent("");
        }}
      />
    </div>
  );
};

export default TodoInput;
