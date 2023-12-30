import React, { useState } from "react";
import { Form } from "./Form";
import { Task } from "./Task";
import { v4 as uuid } from "uuid";
import { EditForm } from "./EditForm";
export const ToDoWrapper = () => {
  const [tasks, setTasks] = useState([]);
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

  return (
    <div className="container m-4">
      <div className="row justify-content-center">
        <div className="col-sm-6 m-4 p-4 bg-light">
          <h1>Lista zadań</h1>
          <Form addTask={addTask} />
          {tasks.map((task, i) => (task.isEditing ? <EditForm task={task} updateTask={updateTask} /> : <Task task={task} key={task.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />))}
        </div>
      </div>
    </div>
  );
};
