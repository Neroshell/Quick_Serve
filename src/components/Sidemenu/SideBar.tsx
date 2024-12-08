import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, Box, Fab, Modal } from '@mui/material';
import OrderSummary from '../OrderSummary';
import Badge from '@mui/material/Badge';
import { useSelectionStore } from '../Context/Zustand/selectionStore';

interface SideBarProps {
  firstText: string;
  secondText: string;
  thirdText: string;
}

const SideBar: React.FC<SideBarProps> = ({ firstText, secondText, thirdText }) => {


  const selectionCount= useSelectionStore((state) => state.selectionCount)
  const [isModalOpen, setModalOpen] = useState(false);

  // Toggle Modal Visibility
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <Box
        component="section"
        sx={{
          height: '89vh',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          position: 'fixed',
          top: '69px',
          width: '20%',
          border: '2px solid blue',
        }}
      >
        <List component="nav">
          <ListItem disablePadding>
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HomeIcon fontSize="medium" />
                <ListItemText primary={firstText} />
              </ListItemButton>
            </Box>
          </ListItem>

          <ListItem disablePadding>
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex' }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BorderColorIcon fontSize="medium" />
                <ListItemText primary={secondText} />
              </ListItemButton>
            </Box>
          </ListItem>

          <ListItem disablePadding>
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ForwardToInboxIcon fontSize="medium" />
                <ListItemText primary={thirdText} />
              </ListItemButton>
            </Box>
          </ListItem>
        </List>
      </Box>

      {/* Floating Action Button */}
      <Fab
          
        aria-label="order-summary"
        sx={{ position: 'fixed', bottom: 20, left: 20, background: 'var(--primary-color)' }}
        onClick={handleOpenModal}
      >
        <Badge badgeContent={selectionCount} color="primary">
        <ShoppingCartIcon sx={{color: 'white' }} />
        </Badge>
        
      </Fab>

      {/* Modal for Order Summary */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
          }}
        >
          
          <OrderSummary />
        </Box>
      </Modal>
    </div>
  );
};

export default SideBar;
