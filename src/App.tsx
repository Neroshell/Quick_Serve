import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Waiter from '@/pages/Waiter.tsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/waiter" element={<Waiter />} />
      
        <Route path="/" element={<h1>Welcome! Please choose a page.</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
