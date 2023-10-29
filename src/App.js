import "./App.css";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem.js";
import InputComponent from "./InputComponent";
const App = () => {
  const [task, setTask] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const TODO_KEY = "todos";

  const handleTaskChange = (event) => {
    const { value } = event.target;
    setTask(value);
  };
  const handleSave = () => {
    const newToDos = [...toDos, { name: task, isCompleted: false }];
    setToDos(newToDos);
    setTask("");
    localStorage.setItem(TODO_KEY, JSON.stringify(newToDos));
    //setToDos((prevValue) => [...prevValue,task])
  };
  const handleDelete = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    setToDos(toDosCopy);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };
  const handleEdit = (index) => {
    setTask(toDos[index].name);
    setIsEditMode(true);
    setEditIndex(index);
  };
  const handleComplete = (index) => {
    const toDosCopy = [...toDos];
    toDos[index].isCompleted = true;
    setToDos(toDos);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };
  useEffect(() => {
    const items = localStorage.getItem(TODO_KEY);
    console.log(items);
    if (items) {
      const parsedItems = JSON.parse(items);
      if (parsedItems?.length) {
        setToDos(parsedItems);
      }
    }
  }, []);
  const handleUpdate = () => {
    const toDosCopy = [...toDos];
    toDosCopy[editIndex].name = task;
    setToDos(toDosCopy);
    setIsEditMode(false);
    setTask("");
    setEditIndex(null);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };
  console.log(toDos);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <InputComponent
          task={task}
          isEditMode={isEditMode}
          handleTaskChange={handleTaskChange}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
        />
        <div>
          {toDos.map((todo, index) => (
            <TaskItem
              key={index}
              todo={todo}
              index={index}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </header>
    </div>
  );
};
export default App;
