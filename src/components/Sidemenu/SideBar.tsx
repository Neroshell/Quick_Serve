import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, Box, Fab, Modal } from '@mui/material';




interface SideBarProps {
  firstText: string;
  secondText: string;
  thirdText: string;
}

const SideBar: React.FC<SideBarProps> = ({ firstText, secondText, thirdText }) => {




  return (
    <div>
      <Box
        component="section"
        sx={{
          height: '89vh',
          display: { xs: 'none', sm: 'flex', md: 'flex' },
          flexDirection: 'column',
          position: 'fixed',
          top: '69px',
          width: {sm: '30%', lg: '20%',},
         
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

     
    </div>
  );
};

export default SideBar;
