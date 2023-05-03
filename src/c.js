import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const C = () => {
    const navigate =useNavigate();
  const todolist = JSON.parse(localStorage.getItem("Item"));
  const tf =todolist.find((e)=>e.iscompleted==true)
  const deleteall = () => {
   const ntc= todolist.filter((e)=>e.iscompleted==false)
    localStorage.setItem("Item",JSON.stringify(ntc));
    navigate("/new");
  };
  return (
    <div>
      <h5>Completed Task</h5>
      <button disabled={tf?false:true} onClick={deleteall} className="float-end btn btn-outline-danger">
        Delete All
      </button>
      <br />
      <br />
      {todolist?.map((e, index) => {
        if (e.iscompleted == true) {
          return (
            <p key={index}>
              {" "}
              🚀 {e.task}
            </p>
          );
        }
      })}
    </div>
  );
};

export default C;
