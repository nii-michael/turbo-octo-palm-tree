import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Entries from "./pages/Entries/Entries";
import Login from "./pages/Login/Login";
import Reports from "./pages/Reports/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/entries" element={<Entries />} />
        <Route exact path="/dashboard/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
