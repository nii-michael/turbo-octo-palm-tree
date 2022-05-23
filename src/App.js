import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Entries from "./pages/Entries/Entries";
import Login from "./pages/Login/Login";
import Reports from "./pages/Reports/Reports";
import ProtectedRoute from "./components/ProtectedRoute";
import SingleReport from "./pages/Reports/SingleReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/entries"
          element={
            <ProtectedRoute>
              <Entries />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/reports/:week"
          element={
            <ProtectedRoute>
              <SingleReport />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
