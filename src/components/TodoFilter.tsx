import React from 'react';
import { TodoFilter as FilterType } from '../types';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export function TodoFilter({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted
}: TodoFilterProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="w-full bg-slate-700 rounded-lg shadow-sm border border-slate-600 p-4 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <span className="font-medium">{activeCount}</span> item{activeCount !== 1 ? 's' : ''} left
        </div>
        
        <div className="flex items-center justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                currentFilter === filter.value
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-sm text-rose-400 hover:text-rose-300 hover:underline transition-colors duration-200"
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}