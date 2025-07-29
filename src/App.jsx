import React, { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  const [data, setData] = useState({
    "To Do 📝": ["Task One", "Taskk two"],
    "In Progress 🔃": ["Task three"],
    "Done ✅": ["Task four", "Task five"],
  });

  const [editingTask, setEditingTask] = useState({ column: null, index: null });
  const [editingValue, setEditingValue] = useState("");

  // Function to handle adding tasks
  function addTask(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const task = formdata.get("task");

    // Input validation
    if (!task.trim()) {
      alert("Task cannot be empty");
      return;
    }

    // add task to 'To Do' column
    setData((prevData) => {
      return {
        ...prevData,
        "To Do 📝": [...prevData["To Do 📝"], task],
      };
    });

    // Clear the input field
    event.target.reset();
  }

  // Function to handle deleting tasks
  function deleteTask(column, taskIndex) {
    setData((prevData) => {
      const updatedTasks = prevData[column].filter(
        (_, index) => index !== taskIndex
      );
      return {
        ...prevData,
        [column]: updatedTasks,
      };
    });
  }

  // Start editing a task
  function startEdit(column, index, value) {
    setEditingTask({ column, index });
    setEditingValue(value);
  }

  // Handle input change for editing
  function handleEditChange(e) {
    setEditingValue(e.target.value);
  }

  // Save the edited task
  function saveEdit() {
    const { column, index } = editingTask;
    if (column === null || index === null) return;
    setData((prevData) => {
      const updatedTasks = prevData[column].map((task, i) =>
        i === index ? editingValue : task
      );
      return {
        ...prevData,
        [column]: updatedTasks,
      };
    });
    setEditingTask({ column: null, index: null });
    setEditingValue("");
  }

  // Cancel editing
  function cancelEdit() {
    setEditingTask({ column: null, index: null });
    setEditingValue("");
  }

  return (
    <>
      <Header />
      <main className="main">
        <Form addTask={addTask} />
        <Board
          data={data}
          deleteTask={deleteTask}
          editingTask={editingTask}
          editingValue={editingValue}
          startEdit={startEdit}
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      </main>
    </>
  );
}
