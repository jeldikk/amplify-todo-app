import { Todo, TodoWithTimestamps } from "@/models/todo";
import TodoItem from "./todo-item";

type Props = {
  todos: TodoWithTimestamps[];
};

export default function TodoList(props: Props) {
  const { todos } = props;
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
