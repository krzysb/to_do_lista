import React, { useState } from "react";

export const EditForm = ({ updateTask, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(value, task.id);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} onChange={(e) => setValue(e.target.value)}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Edytuj zadanie" value={value} />
        <button className="btn btn-success text-light" type="submit" id="">
          Zatwierdź
        </button>
      </div>
    </form>
  );
};
