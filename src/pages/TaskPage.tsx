import { useState } from "react";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import { TaskFilters } from "../components/TaskFilters";
import { Plus, ListTodo } from "lucide-react";

function TasksPage() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <ListTodo size={32} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">
            Task Management Dashboard
          </h1>
        </div>
        <button
          onClick={() => setShowAddTask(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          Add Task
        </button>
      </div>

      <div className="mb-6">
        <TaskFilters />
      </div>

      <TaskList />

      {showAddTask && <TaskForm onClose={() => setShowAddTask(false)} />}
    </div>
  );
}

export default TasksPage;
