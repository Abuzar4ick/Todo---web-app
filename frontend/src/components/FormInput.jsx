import { useState } from "react";
// icons
import { AiOutlinePlus } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { useTodoStore } from "../store/useTodoStore.js";

const FormInput = () => {
  const { createNewTask, isTaskCreating } = useTodoStore();
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createNewTask({ task: todo });
    setTodo("");
  };
  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-95.25 h-10 rounded-[10px] px-3 border-2 border-[#3E1671] outline-none placeholder:text-[#777777] text-[16px]"
        placeholder="Add a new task"
      />
      <button disabled={isTaskCreating} className="w-10 h-10 bg-[#9E78CF] rounded-[10px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        {isTaskCreating ? (
          <FiLoader className="w-5.5 h-5.5 animate-spin" />
        ) : (
          <AiOutlinePlus className="w-5.5 h-5.5" />
        )}
      </button>
    </form>
  );
};

export default FormInput;
