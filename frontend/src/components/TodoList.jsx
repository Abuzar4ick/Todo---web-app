import { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
// icons
import { TiTick } from "react-icons/ti";
import { GoTrash } from "react-icons/go";

const TodoList = () => {
  const { getAllTasks, tasks, deleteTask, completeTask } = useTodoStore();
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {
    setTodoList(tasks.filter((task) => !task.isCompleted));
  }, [tasks]);

  return (
    <div className="w-108 flex flex-col gap-y-4">
      <p>Tasks to do - {todoList.length}</p>
      {todoList.map((todo) => (
        <div
          key={todo._id}
          className="w-full min-h-18.75 bg-[#15101C] rounded-[10px] text-[#9E78CF] px-6 flex items-center justify-between"
        >
          <p>{todo.todo}</p>
          <div className="flex gap-4">
            <TiTick
              onClick={() => completeTask(todo._id)}
              className="cursor-pointer hover:text-[#3E1671]"
              size={20}
            />
            <GoTrash
              onClick={() => deleteTask(todo._id)}
              className="cursor-pointer hover:text-[#3E1671]"
              size={20}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
