import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TaskPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar/> 
          <Routes>
            {/* Redirect root path to /task */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/task" element={<TasksPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
