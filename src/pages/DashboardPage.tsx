import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";

function DashboardPage() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Pending Tasks */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Pending Tasks
        </h2>
        {pendingTasks.length > 0 ? (
          <ul className="space-y-4">
            {pendingTasks.map((task) => (
              <li
                key={task.id}
                className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <span className="text-sm text-gray-500">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No pending tasks! 🎉</p>
        )}
      </div>

      {/* Link to Task Page */}
      <div>
        <Link
          to="/task"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create New Task
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
