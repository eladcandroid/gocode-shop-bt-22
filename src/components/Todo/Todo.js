import { useContext, useEffect } from "react";
import TodosContext from "../../contexts/TodosContext";
import "./Todo.css";

export default function Todo({ id, title, completed }) {
  const {removeTodo} = useContext(TodosContext);
  useEffect(() => {
    // console.log('BORN');
    return () => {
      // console.log("DIED", id);
    }
  }, [])
  return (
    <div className={`Todo${completed ? ' completed' : ''}`}>
      <button onClick={() => removeTodo(id)}>🗑️</button>
      Todo ID: {id} Title: {title}
    </div>
  );
}
