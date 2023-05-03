import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate, NavLink, Navigate } from "react-router-dom";
import New from "./new";
import C from "./c";
import Nc from "./nc";
import { useState } from "react";
import Footer from "./footer";
import Home from "./home";
function App() {
  const navigate = useNavigate();
  var t;

  if (JSON.parse(localStorage.getItem("Item"))) {
    var todo = JSON.parse(localStorage.getItem("Item"));
    var totaltask = todo.length;
    var nct = 0;
    todo?.map((e) => {
      if (e.iscompleted == false) {
        nct = nct + 1;
      }
    });
    t = (((totaltask - nct) / totaltask) * 100).toFixed();
  }
  return (
    <>
      <h2 className="alert-dark text-center ">TO DO LIST </h2>
      <br />
      <div
        className="progress"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped  bg-info progress-bar-animated"
          style={{ width: `${t}%` }}
        >
          {t}% Task Completed
        </div>
      </div>
      <br />

      <div className="container">
        <div className="row shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="col-6  ">
            <span style={{ fontSize: "22px" }}>Main Menu</span>
            <br />
            <br />

            <NavLink
              className="shadow p-2 mb-5 bg-body-tertiary rounded"
              style={{ textDecoration: "none" }}
              to="/new"
            >
              Add
            </NavLink>
            <br />
            <br />
            <NavLink
              style={{ textDecoration: "none" }}
              className="shadow p-2 mb-5 bg-body-tertiary rounded"
              to="/c"
            >
              Completed
            </NavLink>
            <br />
            <br />
            <NavLink
              style={{ textDecoration: "none" }}
              className="shadow p-2 mb-5 bg-body-tertiary rounded"
              to="/nc"
            >
              Not completed
            </NavLink>
          </div>

          <div className="col-6">
            <span style={{ fontSize: "25px" }}>Status</span>
            {todo ? (
              <div>
                <p className="shadow p-2 mb-5 bg-body-tertiary rounded">
                  Not Completed task {nct}
                </p>
                <p className="shadow p-2 mb-5 bg-body-tertiary rounded">
                  Completed task {totaltask - nct}
                </p>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col  border-5 shadow p-3 mb-5 bg-body-tertiary rounded">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/new" exact element={<New />} />
            <Route path="/c" exact element={<C />} />
            <Route path="/nc" exact element={<Nc />} />
            <Route path="*" element={<Navigate to="/" exact></Navigate>} />
          </Routes>
        </div>
      </div>
      <hr className="container" />
      <Footer />
    </>
  );
}

export default App;
