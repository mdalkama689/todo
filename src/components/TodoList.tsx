import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onEdit, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="bg-gray-50 rounded-full p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-slate-400"
          >
            <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"></path>
            <path d="M14 2v6h6"></path>
            <path d="M4 15a2 2 0 0 0 2 2h3"></path>
            <path d="M9 17v4"></path>
            <path d="M9 21h10"></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-700 mb-1">No tasks here</h3>
        <p className="text-slate-500 max-w-xs">
          Add a new task to get started with your todo list.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 mt-4">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}