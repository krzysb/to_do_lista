import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask, editTask, darkMode }) => {
  return (
    <div className={`d-flex justify-content-between align-items-center text-light my-3 p-3 rounded ${darkMode ? "border-bottom border-white rounded-0" : "primary-color"}`}>
      <div onClick={() => toggleCompleted(task.id)} className={` ${task.completed ? "completed" : ""}`}>
        {task.task}
      </div>
      <div className="d-flex ">
        <FontAwesomeIcon className="px-2" icon={faPenToSquare} onClick={() => editTask(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};
