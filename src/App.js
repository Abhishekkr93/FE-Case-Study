import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Details from './Details';
import Login from './Login';
import Thankyou from './Thankyou';

function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Details" element={<Details />} />
      <Route path="/Thankyou" element={<Thankyou />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
