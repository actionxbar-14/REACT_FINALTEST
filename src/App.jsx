import React from "react";
import InputForm from "./components/InputForm";
import Tasks from "./components/Tasks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegUserCircle } from "react-icons/fa";

const App = () => {
  return (
    <div className="h-full bg-slate-800">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover={false}
      />

      <h1 className="bg-[#1c1c1c] p-6 font-extrabold text-white text-center flex justify-between items-center text-2xl">
           <span>Task Manager</span>  <FaRegUserCircle size={38}/>
      </h1>
      <h1 className="text-xl  text-white text-center mb-6 bg-white/10 backdrop-blur-md py-3 px-6 rounded-md border border-white/30 shadow-md">
         Add Your Task and delete Easily
      </h1>
      <InputForm />
      <Tasks />
    </div>
  );
};

export default App;
