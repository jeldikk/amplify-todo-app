import { Amplify } from "aws-amplify";
import TodoCreationForm from "@/components/todo-creation-form";
import TodoList from "@/components/todo-list";
import { getTodoList } from "@/operations/todo.server";
import { Todo } from "@/models/todo";
import config from "@/../amplify_outputs.json";

Amplify.configure(config, { ssr: true });

export default async function Home() {
  const { pending, completed } = await getTodoList();
  return (
    <main className="h-screen">
      <div className="container mx-auto flex gap-2">
        <div className="creation-form w-1/3">
          <TodoCreationForm></TodoCreationForm>
        </div>
        <div className="pending-todo-list w-1/3">
          <TodoList todos={pending as Todo[]}></TodoList>
        </div>
        <div className="completed-todo-list w-1/3">
          <TodoList todos={completed as Todo[]}></TodoList>
        </div>
      </div>
    </main>
  );
}
