import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import LogActivity from "./Components/LogActivity";
import Progress from "./Components/Progress";
import GoalSettings from "./Components/GoalSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="log" element={<LogActivity />} />
          <Route path="progress" element={<Progress />}/>
          <Route path="Goals" element={<GoalSettings />}/>
          
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
