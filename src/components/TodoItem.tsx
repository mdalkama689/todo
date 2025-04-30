import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../types';
import { CheckCircle, Circle, Pencil, Trash2, X, Save } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="group flex items-center p-3 bg-slate-700 rounded-lg shadow-sm border border-slate-600 hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 focus:outline-none"
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed ? (
          <CheckCircle className="w-6 h-6 text-emerald-500 transition-colors" />
        ) : (
          <Circle className="w-6 h-6 text-slate-400 hover:text-indigo-400 transition-colors" />
        )}
      </button>
      
      <div className="flex-grow mx-3">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1 bg-slate-600 text-slate-100 border border-indigo-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            autoFocus
          />
        ) : (
          <p className={`${todo.completed ? 'line-through text-slate-400' : 'text-slate-100'} transition-all duration-200`}>
            {todo.text}
          </p>
        )}
      </div>
      
      <div className="flex space-x-1">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="p-1 text-emerald-400 hover:bg-slate-600 rounded transition-colors"
              aria-label="Save"
            >
              <Save className="w-5 h-5" />
            </button>
            <button
              onClick={handleCancel}
              className="p-1 text-amber-400 hover:bg-slate-600 rounded transition-colors"
              aria-label="Cancel"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="p-1 text-indigo-400 hover:bg-slate-600 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Edit"
            >
              <Pencil className="w-5 h-5" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-1 text-rose-400 hover:bg-slate-600 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}