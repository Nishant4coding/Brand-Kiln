import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSearchQuery } from "../store/taskSlice";
import { RootState } from "../store/store";
import { Search } from "lucide-react";

export function TaskFilters() {
  const dispatch = useDispatch();
  const { filter, searchQuery } = useSelector(
    (state: RootState) => state.tasks
  );

  const filters = [
    { value: "all", label: "All Tasks" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
    { value: "overdue", label: "Overdue" },
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d009a]"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => dispatch(setFilter(f.value as any))}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === f.value
                ? "bg-[#6d009a] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
