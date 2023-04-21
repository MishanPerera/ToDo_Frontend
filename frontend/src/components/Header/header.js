import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import ToDoList from "../todo/todo-list";
import App from "../../App";

const Header = () => {
  const [authenticated, setAuthenticated] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    setAuthenticated(false);
    navigate("/");
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
        ></div>
      </div>
    </nav>
  );
};

export default Header;
