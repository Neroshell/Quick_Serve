import { usePageContext } from '@/components/Context/PageContext';
import Food from '@/components/Food';
import Bar from '@/components/Bar';
import Navbar from '@/components/Navbar/Navbar';


const Waiter = () => {
  const { currentPage, setCurrentPage } = usePageContext(); // Access context

  const handlePageClick = (page: string) => {
    setCurrentPage(page); // Update state via context
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Order Food':
        return <Food onPageClick={handlePageClick} />;
      case 'Order Drinks':
        return <Bar onPageClick={handlePageClick} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar 
        logoSrc="/Logo.webp"
        title="QuickServe"
        pages={['Order Food', 'Order Drinks']}
        onLoginClick={() => alert("Login clicked")}
        onPageClick={handlePageClick}
      />
      
      {renderPage()}
    </div>
  );
};

export default Waiter;

