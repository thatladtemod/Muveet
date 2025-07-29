import React from "react";

export default function TaskCard({
  title,
  deleteTask,
  isEditing,
  editingValue,
  startEdit,
  handleEditChange,
  saveEdit,
  cancelEdit,
  onCheck,
  column,
}) {
  return (
    <div className="task-card">
      {column !== "Done ✅" && (
        <div className="check-box">
          <input
            type="checkbox"
            name="task-check"
            id="task-check"
            onChange={onCheck}
          />
        </div>
      )}
      {isEditing ? (
        <>
          <div className="task-title">
            <input
              type="text"
              value={editingValue}
              onChange={handleEditChange}
              className="edit-input"
            />
          </div>
          <div className="task-buttons">
            <button type="button" className="save-button" onClick={saveEdit}>
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="task-title">{title}</div>
          <div className="task-buttons">
            <button type="button" className="edit-button" onClick={startEdit}>
              Edit
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={deleteTask}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
