import React, { useState } from "react";
import { Form } from "./Form";
import { Task } from "./Task";
import { v4 as uuid } from "uuid";
import { EditForm } from "./EditForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
export const ToDoWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const addTask = (task) => {
    //dodajmey zadanie
    setTasks([...tasks, { id: uuid(), task: task, completed: false, isEditing: false }]);
  };
  const toggleCompleted = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(deleteTask);
  };
  const editTask = (id) => {
    //pokazujemy formularz edycji
    const updatedTask = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isEditing: !task.isEditing };
      }
      return task;
    });
    setTasks(updatedTask);
  };
  const updateTask = (value, id) => {
    //zapis danych
    const updatedTask = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, task: value, isEditing: !task.isEditing };
      }
      return task;
    });
    setTasks(updatedTask);
  };
  const deleteAll = () => {
    setTasks([]);
  };

  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className={`${darkMode ? "bg-dark" : "bg-light"} col-sm-6 m-4 py-4 rounded `}>
          <div className="d-flex justify-content-between align-items-center ">
            <h1 className={`${darkMode ? "text-light" : "text-dark"} py-1`}>Lista zadań</h1>
            {!darkMode ? (
              <FontAwesomeIcon icon={faMoon} size="2x" style={{ cursor: "pointer" }} color="gold" onClick={() => setDarkMode((value) => (value = !value))} />
            ) : (
              <FontAwesomeIcon icon={faSun} size="2x" style={{ cursor: "pointer" }} color="gold" onClick={() => setDarkMode((value) => (value = !value))} />
            )}
          </div>

          <Form addTask={addTask} />
          {tasks.length == 0 ? (
            <h3 className={`py-5 ${darkMode ? "text-light" : "text-dark"}`}>Brak zadań</h3>
          ) : (
            <div className="task-list">
              <div className={`d-flex justify-content-between ${darkMode ? "text-light" : "text-dark"}`}>
                <span>Aktualne zadania</span>
                <span onClick={deleteAll} style={{ cursor: "pointer" }}>
                  Wyczyść zadania
                </span>
              </div>
              {tasks.map((task, i) => (task.isEditing ? <EditForm task={task} updateTask={updateTask} /> : <Task task={task} key={task.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} darkMode={darkMode} />))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
