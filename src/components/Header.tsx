import React from 'react';
import { CheckSquare } from 'lucide-react';

interface HeaderProps {
  totalTasks: number;
}

export function Header({ totalTasks }: HeaderProps) {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-900 to-indigo-800 p-6 rounded-lg shadow-lg mb-6 border border-indigo-700">
      <div className="flex items-center mb-2">
        <CheckSquare className="w-8 h-8 text-indigo-300 mr-3" />
        <h1 className="text-2xl font-bold text-white">TodoList</h1>
      </div>
      <p className="text-indigo-200 text-sm opacity-90">
        {totalTasks === 0
          ? "You don't have any tasks yet. Add one below!"
          : `You have ${totalTasks} task${totalTasks !== 1 ? 's' : ''} in your list.`}
      </p>
    </header>
  );
}