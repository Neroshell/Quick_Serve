import React, { Suspense, useState } from 'react';
import styles from './MainPage.module.css'; 
import Stack from '@mui/material/Stack'; 
import Box from '@mui/material/Box'; 
import CircularProgress from '@mui/material/CircularProgress';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Modal from '@mui/material/Modal';
import CardData from './CardData'; // Assuming CardData is a valid array of objects
import { useSelectionStore } from '../Context/Zustand/selectionStore';
import OrderSummary from '../OrderSummary';

// Lazy load MenuCard
const MenuCard = React.lazy(() => import('./MenuCard'));

const MainPage = () => {
  const selectionCount = useSelectionStore((state) => state.selectionCount);
  const [isModalOpen, setModalOpen] = useState(false);

  // Toggle Modal Visibility
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Stack className={styles.mainpage}>
      <Box
        component="section"
        sx={{
          display: { xs: 'flex', sm:'flex', md: 'flex', lg: 'flex' },
         
          justifyContent: 'center',
          flexWrap: 'wrap',
          flex: 1,
          gap: '20px',
          mt: '75px',
          ml: { xs: '0', sm: '30%', md: '21%' }, // Responsive margin-left
          p: '20px',
          borderRadius: '15px',
          backgroundColor: 'var(--main-background)',
    
        }}
      >
        {/* Lazy-loaded MenuCard components */}
        <Suspense fallback={<CircularProgress />}>
          {CardData.map((card) => (
            <MenuCard
             
              key={card.id}
              id={card.id}
              image={card.image}
              foodName={card.foodName}
              price={card.price}
            />
          ))}
        </Suspense>

        {/* Floating Action Button with ShoppingCartIcon */}
        <Fab
          aria-label="order-summary"
          sx={{ position: 'fixed', bottom: 20, left: 5, backgroundColor: 'var(--primary-color)' }}
          onClick={handleOpenModal}
        >
          <Badge badgeContent={selectionCount} color="primary">
            <RestaurantMenuIcon sx={{ color: 'white' }} />
          </Badge>
        </Fab>
      </Box>

      {/* Modal for Order Summary */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
          }}
        >
          <OrderSummary />
         
        </Box>
      </Modal>
    </Stack>
  );
};

export default MainPage;
