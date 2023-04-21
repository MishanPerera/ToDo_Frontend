import { useState, useEffect } from "react";
import axios from "axios";
import "./popup.css";

const Popup = ({ todo, onClose }) => {
  const [todoDetails, setTodoDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${todo}`)
      .then((res) => {
        setTodoDetails(res.data);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, [todo]);

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h2>TODO DETAILS</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-content">
          {!todoDetails ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>ID: {todoDetails.id}</p>
              <p>Title: {todoDetails.title}</p>
              <p
                className={
                  todoDetails.completed ? "btn btn-success" : "btn btn-danger"
                }
              >
                {todoDetails.completed ? "Completed" : "Pending"}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
