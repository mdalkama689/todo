import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow py-3 px-4 bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-r-lg transition-colors duration-200 flex items-center justify-center shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!text.trim()}
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        <span>Add</span>
      </button>
    </form>
  );
}