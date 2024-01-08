import React, { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { UpdateForm } from "./components/UpdateForm";
import { ToDo } from "./components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      // let newEntry = { id: num, title: newTask, status: false };
      // setToDo([...toDo, newEntry]);

      //refactored
      setToDo([...toDo, { id: num, title: newTask, status: false }]);
      setNewTask("");
    }
  };
  //delete task
  const deleteTask = (id) => {
    // let newTasks = toDo.filter((task) => task.id !== id);
    // setToDo(newTasks);
    //refactored
    setToDo(toDo.filter((task) => task.id !== id));
  };
  //done task
  const doneTask = (id) => {
    // let newTask = toDo.map((task) => {
    //   if (task.id == id) {
    //     return { ...task, status: !task.status };
    //   }
    //   return task;
    // });
    // setToDo(newTask);

    //refactored
    setToDo(
      toDo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };
  //cancel update task
  const cancelUpdateTask = () => {
    setUpdateData("");
  };
  //change updated task
  const changeTask = (e) => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false,
    // };
    // setUpdateData(newEntry);

    //refactored
    setUpdateData({ ...updateData, title: e.target.value });
  };
  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObj = [...filterRecords, updateData];
    setToDo(updatedObj);
    setUpdateData("");
  };
  return (
    <div className="container App">
      <br /> <br />
      <h2>To Do List With ReactJS</h2>
      <br /> <br />
      {/*update task*/}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdateTask={cancelUpdateTask}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      {toDo && toDo.length ? "" : "No tasks..."}
      <ToDo
        toDo={toDo}
        doneTask={doneTask}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
