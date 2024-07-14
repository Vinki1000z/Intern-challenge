// App.js
import { BrowserRouter as Router } from "react-router-dom";

// importing the css file
import "./App.css";
// import GoogleLogin from "./Components/GoogleLogin";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Navbar from "./Components/Navbar/Navbar.js";

import HideCardState from "./createcontext/HideCardContext/HideCardState.js";
import DashboardState from "./createcontext/DashboardContext/DashboardState.js";
import Alertstate from "./createcontext/Alert/AlertState.js";
function App() {
  return (
    <>
    <Router>
      <Alertstate>
      <DashboardState>
      <HideCardState>
   
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Navbar />
        <Dashboard/>
      </div>

      </HideCardState>
      </DashboardState>
      </Alertstate>
    </Router>
    </>
  );
}

export default App;
