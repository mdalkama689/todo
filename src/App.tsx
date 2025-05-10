import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { useEffect, useState } from 'react';
import MobileShare from './components/share/MobileShare';
import TabShare from './components/share/TabShare';

function App() {
    const [deviceType, setDeviceType] = useState<"big" | "small">("big");

  const {
    todos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted
  } = useTodos();

    useEffect(() => {
    const handleResize = () => {
        setDeviceType(window.innerWidth < 1024 ? "small" : "big");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
       {deviceType === "small" ? <MobileShare /> : <TabShare />}
      <div className="max-w-lg mx-auto">
        <Header totalTasks={stats.total} />
        
        <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden p-6">
          <TodoForm onAdd={addTodo} />
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
          
          {stats.total > 0 && (
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              activeCount={stats.active}
              completedCount={stats.completed}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>
        
        <footer className="mt-8 text-center text-sm text-slate-400">
          <p>Drag and drop to reorder tasks • Double-click to edit</p>
        </footer>
      </div>
    </div>
  );
}

export default App