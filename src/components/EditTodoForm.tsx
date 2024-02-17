import { useState, useEffect } from "react";
import { TodoInterface } from "./TodoWrapper";
interface Props{
    editTask : (id :string , task : string) => void;
    todo : TodoInterface;
}
const EditTodoForm = ({editTask , todo} : Props) =>{
    const [taskValue, setTaskValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editTask (todo.id , taskValue);
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                id="taskDescription"
                type="text"
                className="todo-input"
                placeholder="Update task"
                value={taskValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setTaskValue(event.target.value)
                }
            />
            <button type="submit" className="todo-btn">
                Update Task
            </button>
        </form>
    );
}
export default EditTodoForm;

