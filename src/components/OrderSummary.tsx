import { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import {Box, Typography, List, ListItem, Button, IconButton, Paper, Grid } from '@mui/material';

type FoodItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export default function OrderSummary() {
  const [items, setItems] = useState<FoodItem[]>([
    { id: 1, name: 'Pizza', quantity: 1, price: 12.99 },
    { id: 2, name: 'Burger', quantity: 2, price: 8.99 },
    { id: 3, name: 'Salad', quantity: 1, price: 7.99 },
    { id: 4, name: 'Maltese Fish', quantity: 1, price: 6.99 },
    { id: 5, name: 'Jollof rice', quantity: 1, price: 5.99 },
    { id: 6, name: 'Grapes', quantity: 1, price: 4.99 },
    { id: 7, name: 'Fish shawarma', quantity: 1, price: 3.99 },
  ]);

  const incrementQuantity = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id: number) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Paper sx={{  margin: 'auto', padding: 4, width: '100%' }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Order Summary
      </Typography>

      {/* Item Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
        <Typography variant="h6" component="h6">Item</Typography>
        <Typography variant="h6" component="h6">Qty</Typography>
      </Box>

      {/* List of Items */}
      <Box sx={{ maxHeight: 200, overflowY: 'auto', backgroundColor: 'var( --light-hover)'}}>
      <List>
        {items.map(item => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', paddingY: 1, backgroundColor: '#f9f9f9', marginBottom: 1 }}>
            
            {/* Item Name */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">${item.price.toFixed(2)}</Typography>
            </Box>

            {/* Quantity Controls */}   {/* add a scroll bear here */} 
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={() => decrementQuantity(item.id)} aria-label={`Decrease quantity of ${item.name}`}>
                <Minus />
              </IconButton>
              <Typography sx={{ width: 30, textAlign: 'center' }} aria-label={`Quantity of ${item.name}`}>
                {item.quantity}
              </Typography>
              <IconButton onClick={() => incrementQuantity(item.id)} aria-label={`Increase quantity of ${item.name}`}>
                <Plus />
              </IconButton>
              <IconButton onClick={() => removeItem(item.id)} color="error" aria-label={`Remove ${item.name} from order`}>
                <X />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
       
      </Box>

      {/* Total Price */}
      {items.length > 0 ? (
        <Box sx={{ textAlign: 'right', marginTop: 2 }}>
          <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary" textAlign="center" mt={3}>
          Your order is empty
        </Typography>
      )}

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button variant='contained' sx={{ marginTop: '30px', padding: '15px', backgroundColor: 'var(--primary-color)' }}>Send to Kitchen</Button>
            </div>

    </Paper>
  );
}
