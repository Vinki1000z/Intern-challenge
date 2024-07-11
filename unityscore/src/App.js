// App.js
import { BrowserRouter as Router } from "react-router-dom";

// importing the css file
import "./App.css";
// import GoogleLogin from "./Components/GoogleLogin";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Navbar from "./Components/Navbar/Navbar.js";

function App() {
  return (
    // <Router>
    //   <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Dashboard />}>
    //         <Route path="/yourPost" element={<YourPost/>} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    <>
    <Router>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Navbar />
        <Dashboard/>
      </div>
    </Router>
    </>
  );
}

export default App;
