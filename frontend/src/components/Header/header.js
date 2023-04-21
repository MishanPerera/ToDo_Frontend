import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./header.css";
import ToDoList from "../todo/todo-list";
import App from "../../App";

const Header = ({ history, isLogged }) => {
  const handleClick = () => {
    history.push("/");
    isLogged(false);
  };

  return (
    <nav className="nav-h">
      <div className="div-header">
        <Link className="div-svg" exact to="/" activeClassName="active">
          <button>ToDo</button>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button className="button-header" onClick={handleClick}>
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
