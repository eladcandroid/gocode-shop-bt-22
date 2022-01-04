import "./App.css";
import Todos from "./components/Todos/Todos";

function App() {
  const todos = [
    { id: 1, title: "Wash the dishes" },
    { id: 2, title: "Throw the garbage" },
  ];

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
