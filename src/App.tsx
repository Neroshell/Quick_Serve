import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Waiter from '@/pages/Waiter';
import  AppProviders  from '@/components/Context/AppProviders';


function App() {
  return (
    <AppProviders> {/* Wrap the whole app with PageProvider */}
      <Router>
        <Routes>
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/" element={<h1>Hello choos eyour page</h1>} />
        </Routes>
      </Router>
    </AppProviders>
  );
}

export default App;
