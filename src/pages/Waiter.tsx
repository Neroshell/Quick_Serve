import { useState } from 'react';
import Food from '@/components/Food';
import Bar from '@/components/Bar';
import Navbar from '@/components/Navbar/Navbar';

const Waiter = () => {
  const [currentPage, setCurrentPage] = useState('Order Food'); // Default to 'Order Food'

  const handlePageClick = (page: string) => {
    console.log(`Page clicked: ${page}`); // Log the page clicked
    setCurrentPage(page); // Update state with the selected page
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Order Food':
        return <Food onPageClick={handlePageClick} />;
      case 'Order Drinks':
        return <Bar onPageClick={handlePageClick} />;
      default:
        return null; // Handle unexpected values
    }
  };

  return (
    <div>
      <Navbar 
        logoSrc="/Logo.webp"
        title="QuickServe"
        pages={['Order Food', 'Order Drinks']}
        onLoginClick={() => alert("Login clicked")}
        onPageClick={handlePageClick} // Pass the page click handler to Navbar
      />
      
      {/* Render the current page based on the switch statement */}
      {renderPage()}
    </div>
  );
};

export default Waiter;
