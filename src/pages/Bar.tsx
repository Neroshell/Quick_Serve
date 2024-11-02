
import Navbar from '@/components/Navbar/Navbar.tsx'
import SideBar from '@/components/Sidemenu/SideBar'
import DrinksContent from '@/components/MainContent/DrinksContent.tsx'


const handleLoginClick = () => {

  alert("Login clicked");

}
const Bar = () => {
  return (
    <div>
      <Navbar
      logoSrc="/Logo.webp"
      title="QuickServe"
      pages={['Order Drinks']}
      onLoginClick={handleLoginClick}
   
    />
       <div>
           <SideBar firstText='Current orders' secondText='Order status' thirdText='Notification'/>
           <DrinksContent/>
       </div>
    </div>
  )
}

export default Bar

