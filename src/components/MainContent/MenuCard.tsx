import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useSelectionStore } from '../Context/Zustand/selectionStore'; 

// Define the props
interface MenuCardProps {
  foodName: string;
  price: number;
  image: string;
  id: string; // Unique identifier for the item
  
}

const MenuCard: React.FC<MenuCardProps> = ({ foodName, price, image, id }) => {
  // Zustand store functions and state
  const selectedItems = useSelectionStore((state) => state.selectedItems);
  const toggleItemSelection = useSelectionStore((state) => state.toggleItemSelection);

  // Determine if this item is selected based on Zustand state
  const isSelected = selectedItems[id] ?? false;

  // Button click handler
  const handleToggle = () => {
    toggleItemSelection(id);
  };

  return (
    <Card   sx={{
      width: { xs: '80%', sm: '40%', md: '50%', lg: '20%' }, // Responsive maxWidth
      maxHeight: '300px', // Fixed maxHeight
      borderRadius: { 
        xs: '5px', 
        md: '5px', 
       
      }, // Responsive border
    }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={foodName} />
        <CardContent
          sx={{
            textAlign: 'center',
            
          }}
        >
          <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
            {foodName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={handleToggle}
          sx={{
            margin: '0 auto',
            color: isSelected ? 'white' : 'var(--primary-color)',
            borderColor: 'var(--primary-color)',
            backgroundColor: isSelected ? 'green' : '',
          }}
        >
          {isSelected ? 'Picked' : 'Select'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
