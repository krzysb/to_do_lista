import React, { useState } from "react";

export const Form = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} onChange={(e) => setValue(e.target.value)}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Jakie zadanie chcesz dodać" value={value} />
        <button className="btn btn-success text-light" type="submit" id="">
          Dodaj
        </button>
      </div>
    </form>
  );
};
