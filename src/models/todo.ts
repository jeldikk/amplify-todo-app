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
