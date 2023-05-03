import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Nc = () => {
  const [todolist, settodolist] = useState(
    JSON.parse(localStorage.getItem("Item"))
  );
  const navigate = useNavigate();
  const removetodo = (index) => {
    todolist.map((e, index0) => {
      if (index0 == index) {
        e.iscompleted = true;
      }
    });
    localStorage.setItem("Item", JSON.stringify(todolist));
    navigate("/c");
  };
  return (
    <div>
      <h5>Not Completed Task</h5>

      {todolist?.map((e, index) => {
        if (e.iscompleted == false) {
          return (
            <div key={index}>
              🚀 {e.task}
              <span className="float-end">
                {e.time}{" "}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    removetodo(index);
                  }}
                >
                 Remove
                </button>
              </span>
              <br />
              <br />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Nc;
