

import { useState } from "react";
import { useTask } from "../context/TaskContext";
import { toast } from "react-toastify";

const InputForm = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTask();

  const handleAdd = () => {


    if (text.trim()) {
      toast.success("Task addeed");
      addTask(text, description);
      setText("");
      setDescription("");
    }
  };


  

  return (  
    <div className="flex mt-10 m-auto rounded-md flex-col w-[60%] border-white border-[2px] px-8 py-16 gap-2 ">
      
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded p-1 text-white placeholder-white/80"
          placeholder="Enter task..."
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded p-1 text-white placeholder-white/80"
          placeholder="Enter task description..."
        />
    

      <button
        onClick={handleAdd}
        className="bg-white/5 text-white px-4 py-2 rounded hover:bg-white/10 transition"
      >
        Add Task
      </button>
    </div>
  );
};

export default InputForm;
