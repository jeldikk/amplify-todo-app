import { Todo } from "@/models/todo";
import { serverClientWithCookies } from "@/utils/amplify.utils";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";

export const client = generateClient<Schema>();

export async function getTodoList() {
  const { data: pending } = await serverClientWithCookies.models.Todo.list({
    filter: {
      status: {
        eq: "PENDING",
      },
    },
  });
  const { data: completed } = await serverClientWithCookies.models.Todo.list({
    filter: {
      status: {
        eq: "COMPLETED",
      },
    },
  });
  return { pending, completed };
}

export async function updateTodo(id: string, data: any) {
  const response = await client.models.Todo.update({
    id: id,
    ...data,
  });
  console.log({ response });
  return response;
}

export async function deleteTodo(id: string) {
  const response = await client.models.Todo.delete({
    id,
  });
  return response;
}
