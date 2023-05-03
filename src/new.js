import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const New = () => {
  const input = useRef();
  let todo = [];
  const navigate = useNavigate();
  const add = () => {
    if (input.current.value) {
      const time = new Date().toString();
      const newtask = { task: input.current.value, iscompleted: false, time:time.slice(4,15) };
      if (JSON.parse(localStorage.getItem("Item"))) {
        todo.push(...JSON.parse(localStorage.getItem("Item")), newtask);
      } else {
        todo.push(newtask);
      }

      console.log(todo);
      localStorage.setItem("Item", JSON.stringify(todo));
      navigate("/nc");
    } else {
      alert("Please Enter something !!!");
    }
  };

  return (
    <div>
      <br />
      <h5>Add New Task</h5>
      <input
        placeholder="Please Enter Something"
        ref={input}
        type="text"
        className="form-control"
      />
      <br />

      <button onClick={add} className="btn btn-outline-primary">
        {" "}
        Add
      </button>
      <br />
      <br />
    </div>
  );
};

export default New;
