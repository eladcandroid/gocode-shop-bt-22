import Todo from "../Todo/Todo";
import "./Todos.css";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map(({ id, title }) => (
        <Todo key={id} id={id} title={title} />
      ))}
    </div>
  );
}
