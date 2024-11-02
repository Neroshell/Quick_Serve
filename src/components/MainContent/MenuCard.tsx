import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

// Define the props 
interface MenuCardProps {
  foodName: string;
  price: number;
  image: string; 
}

const MenuCard: React.FC<MenuCardProps> = ({ foodName, price, image }) => {
  return (
    <Card sx={{ maxWidth: '20%', maxHeight: '300px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image} 
          alt={foodName}
        />
        <CardContent sx={{ textAlign: 'center',  '&:hover': {
              backgroundColor: '#d5ffd8', // Set the background color on hover
               // Set the text color on hover
            }, }}>
          <Typography gutterBottom variant="subtitle1" component="div" sx={{fontWeight:'bold'}}>
            {foodName} {/* Render the food name */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Price: ${price} {/* Render the price */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          variant="outlined" 
          size="large" 
          color="primary"
          sx={{
            margin: '0 auto',
            color: 'var(--primary-color)',
            borderColor: 'var(--primary-color)',
            '&:hover': {
              backgroundColor: 'var(--primary-color)', // Set the background color on hover
              color: 'white', // Set the text color on hover
            },
          }}
          

        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
