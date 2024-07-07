// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleLogin from './Components/GoogleLogin';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <Router>
          <Routes>
       <Route path="/" element={<GoogleLogin/>} />        
       <Route path="/dashboard" element={<Dashboard/>} />        
       </Routes>
    </Router>
  );
}


export default App;
