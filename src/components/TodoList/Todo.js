export default function Todo(props) {
  const removeHandler = (id) => {
    props.onRemove(id);
  };
  const editHandler = (id) => {
    props.onEdit(id);
  };
  return (
    <div
      className={`todo ${props.completed ? "completed" : ""}`}
      style={{ display: "flex" }}
    >
      <li className="todo-item">{props.title}</li>

      <button className="check-btn" onClick={() => editHandler(props.id)}>
        <i className="fas fa-check" aria-hidden="true"></i>
      </button>

      <button className="trash-btn" onClick={() => removeHandler(props.id)}>
        <i className="fas fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
}
