import TaskCard from "./TaskCard";

export default function Column({
  title,
  tasks,
  deleteTask,
  editingTask,
  editingValue,
  startEdit,
  handleEditChange,
  saveEdit,
  cancelEdit,
  moveToDone,
}) {
  return (
    <div className="board-column">
      <h1 className="column-heading">{title}</h1>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task}
          deleteTask={() => deleteTask(title, index)}
          isEditing={
            editingTask.column === title && editingTask.index === index
          }
          editingValue={editingValue}
          startEdit={() => startEdit(title, index, task)}
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          onCheck={() => moveToDone(title, index)}
          column={title}
        />
      ))}
    </div>
  );
}
