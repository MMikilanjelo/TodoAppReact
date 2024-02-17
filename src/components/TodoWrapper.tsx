import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
  editing: boolean;
}

function TodoWrapper() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (task: string) => {
    const id = uuidv4();
    const newTodo: TodoInterface = {
      id: id,
      task: task,
      completed: false,
      editing: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };
  const editTodoTask = (id: string, task: string) => {
    const todoToEdit = todos.find((todo) => todo.id === id);

    if (!todoToEdit) return;

    task.trim() !== ""
      ? setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, editing: !todo.editing } : todo
          )
        )
      : setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, editing: !todo.editing } : todo
          )
        );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="TodoWrapper">
      <TodoForm AddTodoOnSubmit={addTodo} />
      {todos.map((todo, index) =>
        todo.editing ? (
          <EditTodoForm editTask={editTodoTask} todo={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
