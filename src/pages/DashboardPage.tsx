import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";

function DashboardPage() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Task Manager Dashboard
        </h1>
        <p className="text-gray-600">
          Track your tasks, stay productive, and manage deadlines effortlessly.
        </p>
      </header>

      {/* Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600">Total Tasks</h2>
          <p className="text-2xl font-bold">{tasks.length}</p>
        </div>
        <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded-lg">
          <h2 className="text-xl font-semibold text-green-600">
            Completed Tasks
          </h2>
          <p className="text-2xl font-bold">{completedTasks.length}</p>
        </div>
        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-600">
            Pending Tasks
          </h2>
          <p className="text-2xl font-bold">{pendingTasks.length}</p>
        </div>
      </section>

      {/* Task Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pending Tasks */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
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

        {/* Completed Tasks */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Completed Tasks
          </h2>
          {completedTasks.length > 0 ? (
            <ul className="space-y-4">
              {completedTasks.map((task) => (
                <li
                  key={task.id}
                  className="p-4 bg-green-50 shadow rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Completed on: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No completed tasks yet.</p>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <Link
          to="/task"
          className="px-6 py-3 bg-[#6d009a] text-white rounded-full hover:bg-[#6d009a] transition-colors"
        >
          Create New Task
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
