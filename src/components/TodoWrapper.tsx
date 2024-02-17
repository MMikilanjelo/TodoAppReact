import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";

interface Todo {
    id: string;
    task: string;
    completed: boolean;
    editing: boolean;
}

function TodoWrapper() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (task: string) => {
        const id = uuidv4();
        const newTodo: Todo = {
            id: id,
            task: task,
            completed: false,
            editing: false,
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className="TodoWrapper">
            <TodoForm AddTodoOnSubmit={addTodo} />
            <Todo/>
        </div>
    );
}

export default TodoWrapper;