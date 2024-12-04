import {
  ListTodo,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Search,
  Filter,
  LayoutDashboard,
  PieChart,
  ListChecks,
  Clock,
} from "lucide-react";

export function Documentation() {
  const dashboardFeatures = [
    {
      icon: <PieChart className="text-[#6d009a]" size={24} />,
      title: "Task Overview",
      description:
        "Get a quick overview of all your tasks with statistics showing total, completed, and pending tasks at a glance.",
    },
    {
      icon: <ListChecks className="text-green-600" size={24} />,
      title: "Task Categories",
      description:
        "View your tasks organized by status - see pending and completed tasks in separate sections for better organization.",
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Due Date Tracking",
      description:
        "Monitor task deadlines with clear due date displays for both pending and completed tasks.",
    },
  ];

  const taskFeatures = [
    {
      icon: <Plus className="text-green-600" size={24} />,
      title: "Add Tasks",
      description:
        'Create new tasks with a title, description, and due date. Click the "Add Task" button in the top-right corner to open the task creation form.',
    },
    {
      icon: <Edit className="text-[#6d009a]" size={24} />,
      title: "Edit Tasks",
      description:
        "Modify existing tasks by clicking the edit icon. Update the title, description, or due date as needed.",
    },
    {
      icon: <Trash2 className="text-red-600" size={24} />,
      title: "Delete Tasks",
      description:
        "Remove tasks you no longer need by clicking the delete icon. A confirmation prompt will appear to prevent accidental deletions.",
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Mark as Complete",
      description:
        "Toggle task completion status by clicking the checkbox icon. Completed tasks are visually distinguished with a strikethrough effect.",
    },
    {
      icon: <Filter className="text-purple-600" size={24} />,
      title: "Filter Tasks",
      description:
        "Filter tasks by their status: All Tasks, Pending Tasks, Completed Tasks, or Overdue Tasks. Use the filter buttons below the search bar.",
    },
    {
      icon: <Search className="text-gray-600" size={24} />,
      title: "Search Tasks",
      description:
        "Quickly find specific tasks by typing in the search bar. The search works across task titles and updates results in real-time.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <ListTodo size={32} className="text-[#6d009a] mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">
            Task Manager Documentation
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Welcome to the Task Manager documentation. This guide will help you
          understand how to use all the features of our task management
          application.
        </p>
      </div>

      {/* Dashboard Features Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <LayoutDashboard size={24} className="text-[#6d009a] mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">
            Dashboard Features
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Management Features Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <ListChecks size={24} className="text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">
            Task Management Features
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {taskFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
