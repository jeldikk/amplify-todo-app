"use server";
import { redirect } from "next/navigation";
import { TodoPriority, TodoStatus } from "@/models/todo";
import { serverClientWithCookies } from "@/utils/amplify.utils";

export async function createTodoAction(formData: FormData) {
  try {
    const content = formData.get("content") as string;
    const status = formData.get("status") as TodoStatus;
    const priority = formData.get("priority") as TodoPriority;

    await serverClientWithCookies.models.Todo.create({
      content,
      status,
      priority,
    });
  } catch (err) {
    throw err;
  }

  redirect("/");
}

export async function deleteTodoAction(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    await serverClientWithCookies.models.Todo.delete({
      id,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }

  redirect("/");
}

export async function updateTodoAction(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const data = JSON.parse(formData.get("payload") as string);
    await serverClientWithCookies.models.Todo.update({
      id,
      ...data,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }

  redirect("/");
}
