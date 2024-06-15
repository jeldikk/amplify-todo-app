"use client";
import { createTodoAction } from "@/actions/todo.actions";
import { Button, Card, Label, Radio, TextInput } from "flowbite-react";
import { useFormStatus } from "react-dom";

export default function TodoCreationForm() {
  const { pending } = useFormStatus();
  return (
    <div className="todo-creation-form">
      <Card>
        <h1 className="text-xl font-bold text-center">Create a New Todo</h1>
        <form action={createTodoAction}>
          <div>
            <div className="mb-2 block">
              <Label
                className="font-bold"
                htmlFor="content"
                value="What is your Todo"
              />
            </div>
            <TextInput
              id="content"
              type="text"
              name="content"
              placeholder="What do you want to do today"
              required
            />
          </div>
          <div className="my-2">
            <div className="mb-2">
              <Label className="font-bold" value="Priority" />
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <Radio id="high" name="priority" value="HIGH" defaultChecked />
                <Label htmlFor="high">HIGH</Label>
              </div>
              <div className="flex gap-1">
                <Radio id="medium" name="priority" value="MEDIUM" />
                <Label htmlFor="medium">MEDIUM</Label>
              </div>
              <div className="flex gap-1">
                <Radio id="low" name="priority" value="LOW" />
                <Label htmlFor="low">LOW</Label>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="mb-2">
              <Label className="font-bold" value="Status" />
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <Radio
                  id="status"
                  name="status"
                  value="PENDING"
                  defaultChecked
                />
                <Label htmlFor="status">PENDING</Label>
              </div>
              <div className="flex gap-1">
                <Radio id="status" name="status" value="COMPLETED" />
                <Label htmlFor="medium">COMPLETED</Label>
              </div>
            </div>
          </div>
          <div>
            <Button isProcessing={pending} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
