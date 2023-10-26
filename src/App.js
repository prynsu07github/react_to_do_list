import "./styles.css";
import { useState } from "react";
import { Plus, X } from "phosphor-react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList((taskList) => [...taskList, task]);
    console.log(taskList);
    setTask("");
  };

  const deleteTask = (index) => {
    const filteredTaskList = taskList.filter((task, i) => {
      return i !== index;
    });
    setTaskList(filteredTaskList);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input__fields">
          <input
            placeholder="search task"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <form style={{ display: "flex" }} onSubmit={handleSubmit}>
            <input
              placeholder="enter task"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value.trim())}
            />
            <button type="submit">
              <Plus />
            </button>
          </form>
        </div>

        <div className="task__list">
          {taskList.length > 0 ? (
            taskList
              .filter((task) => {
                return task.toLowerCase().includes(searchTerm.toLowerCase());
              })
              .map((task, indx) => {
                return (
                  <div
                    className="task"
                    key={indx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <h2>{task}</h2>
                    <p></p>
                    <button id={indx} onClick={() => deleteTask(indx)}>
                      <X />
                    </button>
                  </div>
                );
              })
          ) : (
            <h2 style={{ color: "White" }}>Add Your Tasks</h2>
          )}
        </div>
      </div>
    </div>
  );
}
