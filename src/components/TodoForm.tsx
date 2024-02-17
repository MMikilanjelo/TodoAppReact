import { useState, useEffect } from "react";

interface Props {
    AddTodoOnSubmit: (task: string) => void;
}

const TodoForm = ({ AddTodoOnSubmit }: Props) => {
    const [taskValue, setTaskValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AddTodoOnSubmit(taskValue);
        setTaskValue("");
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                id="taskDescription"
                type="text"
                className="todo-input"
                placeholder="What is task for today"
                value={taskValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setTaskValue(event.target.value)
                }
            />
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;
