import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ToDoList from "./components/todo/todo-list";
import Header from "./components/Header/header";
import { useState, useEffect } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // perform the authentication logic here
    if (username === "admin" && password === "admin") {
      setAuthenticated(true);
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <Router>
      <div className="container">
        {authenticated ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<ToDoList />}></Route>
            </Routes>
          </>
        ) : (
          <div className="login">
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
