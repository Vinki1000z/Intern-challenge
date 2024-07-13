// App.js
import { BrowserRouter as Router } from "react-router-dom";

// importing the css file
import "./App.css";
// import GoogleLogin from "./Components/GoogleLogin";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Navbar from "./Components/Navbar/Navbar.js";

import HideCardState from "./createcontext/HideCardContext/HideCardState.js";
function App() {
  return (
    <>
    <Router>
      <HideCardState>
   
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Navbar />
        <Dashboard/>
      </div>

      </HideCardState>
    </Router>
    </>
  );
}

export default App;
