import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SideBar from '@/components/Sidemenu/SideBar';
import MainPage from '@/components/MainContent/MainContent';

interface FoodProps {
  onPageClick: (page: string) => void; // Define the prop type
}

const handleLoginClick = () => {
  alert("Login clicked");
};

const Food: React.FC<FoodProps> = ({ onPageClick }) => {
  return (
    <div>
      <Navbar 
        logoSrc="/Logo.webp"
        title="QuickServe"
        pages={['Order Food', 'Order Drinks']}
        onLoginClick={handleLoginClick}
        onPageClick={onPageClick} // Pass the onPageClick to Navbar
        
      />
      <div>
        <SideBar 
          firstText="New Orders" 
          secondText="Menu Categories" 
          thirdText="Order Summary" 
        />
        <MainPage />
      </div>
    </div>
  );
};

export default Food;
