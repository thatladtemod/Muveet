import Column from "./Column";

export default function Board({
  data,
  deleteTask,
  editingTask,
  editingValue,
  startEdit,
  handleEditChange,
  saveEdit,
  cancelEdit,
}) {
  return (
    <div className="board">
      {Object.entries(data).map(([column, tasks]) => (
        <Column
          key={column}
          title={column}
          tasks={tasks}
          deleteTask={deleteTask}
          editingTask={editingTask}
          editingValue={editingValue}
          startEdit={startEdit}
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </div>
  );
}
