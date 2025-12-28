import { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
// icons
import { GoTrash } from "react-icons/go";

const DoneList = () => {
  const {
    getAllTasks,
    tasks,
    deleteTask,
  } = useTodoStore();

  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {
    setDoneList(tasks.filter((task) => task.isCompleted));
  }, [tasks]);

  return (
    <div className="w-108 flex flex-col gap-y-4">
      <p>Done - {doneList.length}</p>
      {doneList.map((task) => (
        <div
          key={task._id}
          className="w-full min-h-18.75 bg-[#15101C] rounded-[10px] text-[#9E78CF] px-6 flex items-center justify-between"
        >
          <del className="text-[#78CFB0]">{task.todo}</del>
          <div className="flex gap-4">
            <GoTrash onClick={() => deleteTask(task._id)} className="cursor-pointer hover:text-[#3E1671]" size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoneList;
