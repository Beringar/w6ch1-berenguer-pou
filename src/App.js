import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodosThunk } from "./redux/thunks/todosThunks";
import "./App.css";
import TodosList from "./components/TodosList/TodosList";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosThunk);
  }, [dispatch]);

  return (
    <div className="App">
      <main className="main">
        <h1>Not Todos List</h1>
        <TodosList todos={todos} />
      </main>
    </div>
  );
};

export default App;
