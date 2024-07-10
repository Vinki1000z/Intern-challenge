// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing the css file
import "./App.css"
// import GoogleLogin from "./Components/GoogleLogin";
// import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
