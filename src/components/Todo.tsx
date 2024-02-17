import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoInterface } from "./TodoWrapper";

interface Props {
  task: TodoInterface;
  toggleComplete: (id: string) => void;
  deleteTodo: (id :string) => void;
  editTodo:(id :string) => void;
}
const Todo = ({ task, toggleComplete , deleteTodo , editTodo}: Props) => {
  return (
    <div className="Todo">
      <p
        className={task.completed ? "completed" : ""}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() =>deleteTodo(task.id)}/>
      </div>
    </div>
  );
};
export default Todo;
