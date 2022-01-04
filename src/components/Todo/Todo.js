import "./Todo.css";

export default function Todo({ id, title }) {
  return (
    <div className="Todo">
      Todo ID: {id} Title: {title}
    </div>
  );
}
