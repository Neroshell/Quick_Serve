import React, { Suspense } from 'react';
import styles from './MainPage.module.css'; 
import Stack from '@mui/material/Stack'; 
import Box from '@mui/material/Box'; 
import CircularProgress from '@mui/material/CircularProgress';
import DrinksData from './DrinksData.tsx';




const MenuCard = React.lazy(() => import('./MenuCard.tsx'));

const DrinksContent = () => {
  return (
    <Stack className={styles.mainpage}>

      <Box
        component="section"
        sx={{
          height: '100%',
          display: { xs: 'flex', md: 'flex' },
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          flex: 1,
          mt: '75px',
          marginLeft: '21%',
          padding: '20px',
          backgroundColor: 'var(--main-background)'
        }}
      >
        <Suspense fallback={<CircularProgress />}>
          {DrinksData.map((card) => (
            <MenuCard key={card.id} image={card.image} foodName={card.drinkName} price={card.price} />
          ))}
        </Suspense>
      </Box>
    </Stack>
  );
};

export default DrinksContent;
