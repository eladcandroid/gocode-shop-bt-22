import Todo from "../Todo/Todo";
import "./Todos.css";

export default function Todos({ todos }) {
  // console.log("Todos Rendered");
  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <Todo key={id} id={id} title={title} completed={completed} />
      ))}
    </div>
  );
}
