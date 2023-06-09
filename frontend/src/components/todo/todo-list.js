import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import Popup from "../popup/Popup";
import "./todo-list.css";

const ToDoList = () => {
  const pageSize = 20;

  const [paginatedToDos, setPaginatedToDos] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [toDos, setToDOs] = useState();
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setToDOs(res.data);
        setPaginatedToDos(_(res.data).slice(0).take(pageSize).value());
      })
      .catch((e) => {
        alert(e.message);
      });
  }, []);

  const pageCount = toDos ? Math.ceil(toDos.length / pageSize) : 0;
  if (pageCount === 1) return null; //if page count =1 then we dont need paginate
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedToDos = _(toDos).slice(startIndex).take(pageSize).value();
    setPaginatedToDos(paginatedToDos);
  };

  const handleRowClick = (id) => {
    setSelectedTodo(id);
    console.log(`Clicked on row with ID ${id}`);
  };

  return (
    <div>
      {!paginatedToDos ? (
        "No Data Found"
      ) : (
        <table className="todo-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedToDos.map((toDo, index) => (
              <tr key={index} onClick={() => handleRowClick(toDo.id)}>
                <td>{toDo.userId}</td>
                <td>{toDo.id}</td>
                <td>{toDo.title}</td>
                <td>
                  <p className={toDo.completed ? "complete" : "pending"}>
                    {toDo.completed ? "Completed" : "Pending"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedTodo && (
        <Popup todo={selectedTodo} onClose={() => setSelectedTodo(null)} />
      )}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ToDoList;
