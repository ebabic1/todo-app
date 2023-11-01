const TaskItem = ({ todo, index, handleComplete, handleDelete, handleEdit }) => {
  return (
    <div key={index} className="todo-wrapper">
    <p className={`${todo.isCompleted ? "completed" : ""}`}>{todo.name}</p>
    <div className="action-wrapper">
      <button
        disabled={todo.isCompleted}
        className="complete-button"
        onClick={() => handleComplete(index)}
      >
        COMPLETE
      </button>
      <button onClick={() => handleDelete(index)} className="delete-button">
        DELETE
      </button>
      <button
        disabled={todo.isCompleted}
        onClick={() => handleEdit(index)}
        className="edit-button"
      >
        EDIT
      </button>
    </div>
  </div>
  );
}
export default TaskItem;
