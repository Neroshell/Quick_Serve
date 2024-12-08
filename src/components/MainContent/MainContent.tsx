import React, { Suspense } from 'react';
import styles from './MainPage.module.css'; 
import Stack from '@mui/material/Stack'; 
import Box from '@mui/material/Box'; 
import CircularProgress from '@mui/material/CircularProgress';
import CardData from './CardData.tsx';




const MenuCard = React.lazy(() => import('./MenuCard'));

const MainPage = () => {
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
              {CardData.map((card) => (
                <MenuCard
                  key={card.id}
                  id={card.id} // Pass the id prop here
                  image={card.image}
                  foodName={card.foodName}
                  price={card.price}
                />
              ))}
        </Suspense>

      </Box>
    </Stack>
  );
};

export default MainPage;
