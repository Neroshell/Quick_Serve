import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Waiter from '@/pages/Waiter';
import  AppProviders  from '@/components/Context/AppProviders';
import OrderSummary from './components/OrderSummary';


function App() {
  return (
    <AppProviders> {/* Wrap the whole app with PageProvider */}
      <Router>
        <Routes>
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/" element={<OrderSummary/>} />
        </Routes>
      </Router>
    </AppProviders>
  );
}

export default App;
