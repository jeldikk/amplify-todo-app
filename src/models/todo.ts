export enum TodoPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export enum TodoStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

export interface Todo {
  id: string;
  content: string;
  status: TodoStatus;
  priority: TodoPriority;
}

export type TodoWithTimestamps = Todo & {
  createdAt: string;
  updatedAt: string;
};
