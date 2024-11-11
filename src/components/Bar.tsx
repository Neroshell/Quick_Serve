import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SideBar from '@/components/Sidemenu/SideBar';
import DrinksContent from '@/components/MainContent/DrinksContent';

interface BarProps {
  onPageClick: (page: string) => void; // Define the prop type

}

const handleLoginClick = () => {
  alert("Login clicked");
};

const Bar: React.FC<BarProps> = ({ onPageClick}) => { // Receive the onPageClick prop
  console.log("Rendering Bar component"); // Log to indicate rendering

  return (
    <div>
      <Navbar
        logoSrc="/Logo.webp"
        title="QuickServe"
        pages={['Order Food', 'Order Drinks']}
        onLoginClick={handleLoginClick}
        onPageClick={onPageClick} // Pass the onPageClick prop to Navbar
       // Pass the background color prop to Navbar
         
      />
      <div>
        <SideBar 
          firstText='Current orders' 
          secondText='Order status' 
          thirdText='Notification'
        />
        <DrinksContent />
      </div>
    </div>
  );
};

export default Bar;
