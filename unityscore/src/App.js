// App.js
import { BrowserRouter as Router } from "react-router-dom";

// importing the css file
import "./App.css";
// import GoogleLogin from "./Components/GoogleLogin";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Navbar from "./Components/Navbar/Navbar.js";
import SearchModalState from './createcontext/SearchModal/SearchModalState.js'
import HideCardState from "./createcontext/HideCardContext/HideCardState.js";
function App() {
  return (
    <>
    <Router>
      <HideCardState>
      <SearchModalState>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Navbar />
        <Dashboard/>
      </div>
      </SearchModalState>
      </HideCardState>
    </Router>
    </>
  );
}

export default App;
