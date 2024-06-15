"use client";
import { type Todo } from "@/models/todo";
// import { updateTodo, deleteTodo } from "@/operations/todo.operations";
// import { generateClient } from "aws-amplify/api";
import { Badge, Button } from "flowbite-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import { Schema } from "../../amplify/data/resource";
import { client } from "../operations/todo.client";
import { useRouter } from "next/router";
import { deleteTodoAction, updateTodoAction } from "@/actions/todo.actions";

type Props = {
  todo: Todo;
};

export default function TodoItem(props: Props) {
  const { todo } = props;
  let priorityType: string, statusType: string;
  switch (todo.priority) {
    case "HIGH":
      priorityType = "pink";
      break;
    case "MEDIUM":
      priorityType = "warning";
      break;
    case "LOW":
      priorityType = "purple";
      break;
    default:
      priorityType = "info";
  }

  switch (todo.status) {
    case "COMPLETED":
      statusType = "success";
      break;
    case "PENDING":
      statusType = "gray";
      break;
    default:
      statusType = "info";
  }

  const toggleTodoHandler = async () => {
    const formData = new FormData();
    formData.set("id", todo.id);
    formData.set(
      "payload",
      JSON.stringify({
        status: todo.status === "COMPLETED" ? "PENDING" : "COMPLETED",
      })
    );
    await updateTodoAction(formData);
    // below code is when you want to perform with out server actions
    // const response = await client.models.Todo.update({
    //   id: todo.id,
    //   status: todo.status === "COMPLETED" ? "PENDING" : "COMPLETED",
    // });
    // console.log({ response });
    // router.push("/");
  };

  const deleteTodoHandler = async () => {
    const formData = new FormData();
    formData.set("id", todo.id);
    await deleteTodoAction(formData);
    // await client.models.Todo.delete({
    //   id: todo.id,
    // });
    // console.log({ response });
  };
  return (
    <div className="todo-item flex px-2 py-3 border border-blue-700 rounded-md my-1">
      <div className="content w-3/5 font-bold">{todo.content}</div>
      <div className="badges flex gap-2 w-2/5">
        <Badge className="font-bold" color={priorityType}>
          {todo.priority}
        </Badge>
        <Badge className="font-bold" color={statusType}>
          {todo.status}
        </Badge>
      </div>
      <div className=" flex controls w-1/5 gap-1">
        <Button onClick={toggleTodoHandler} size={"xs"}>
          {todo.status === "PENDING" ? <FaArrowRight /> : <FaArrowLeft />}
        </Button>
        {todo.status === "PENDING" ? (
          <Button onClick={deleteTodoHandler} color="warning" size="xs">
            <MdDelete />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
