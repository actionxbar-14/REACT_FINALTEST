// import React ,{useState,useContext,createContext}from 'react'

// export const TaskContext = createContext();

// const TaskContextProvider = ({children}) => {
//     const[taskData,setTaskData] = useState(""


        
//     );

//   return (
//     <div>
//         <TaskContext.Provider value={{taskData,setTaskData}}>
//             {children}
//         </TaskContext.Provider>
      
//     </div>
//   )
// }

// export default TaskContextProvider




import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  const addTask = (text, description) => {
    const newTask = { id: Date.now(), text, description };
    setTask([...task, newTask]);
  };
  
  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ task, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};






