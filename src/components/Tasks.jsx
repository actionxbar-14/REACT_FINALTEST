


import { useTask } from "../context/TaskContext";
import { toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";


const Tasks = () => {
  const { task, deleteTask } = useTask();

  return (
    <ul className="bg-gray-600 p-2 m-4 mt-10 border-white border-[1px]">
        <h2 className="text-3xl text-white text-center">Your Tasks

        </h2>
      {task.map((task) => (
        <li
          key={task.id}
          className="text-white border-white/5 shadow-lg my-4 border-[1px] flex justify-between items-center p-4 rounded"
        >
          <span>
            <b>Your Task :</b> {task.text}
            <br />
            <b>Your Description :</b>  {task.description}
            </span>
          <button
            onClick={() => {
                deleteTask(task.id)
               toast.info("Task deleted!");
            }}
            className="text-white hover:text-red-700 transition flex justify-center items-center gap-2"
          >
             <MdDeleteOutline /> Delete Task
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
