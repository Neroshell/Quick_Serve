import { Box, Typography, List, ListItem, Button, IconButton, Paper } from '@mui/material';
import { Minus, Plus, X } from 'lucide-react';
import { useSelectionStore } from './Context/Zustand/selectionStore';

export default function OrderSummary() {
  // Fetch selected items and their quantities from the Zustand store
  const selectedItemDetails = useSelectionStore((state) => state.selectedItemDetails);
  const incrementItemQuantity = useSelectionStore((state) => state.incrementItemQuantity);
  const decrementItemQuantity = useSelectionStore((state) => state.decrementItemQuantity);
  
  const removeItem = (id: string) => {
    const { selectedItemDetails } = useSelectionStore.getState();
    useSelectionStore.setState({
      selectedItemDetails: selectedItemDetails.filter((item) => item.id !== id),
    });
  };

  // Calculate the total price of selected items
  const totalPrice = selectedItemDetails.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Paper sx={{ margin: 'auto', padding: 4, width: '100%' }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Order Summary
      </Typography>

      {/* Item Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
        <Typography variant="h6" component="h6">Item</Typography>
        <Typography variant="h6" component="h6">Qty</Typography>
      </Box>

      {/* List of Items */}
      <Box sx={{ maxHeight: 200, overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
        <List>
          {selectedItemDetails.map((item) => (
            <ListItem
              key={item.id}
              sx={{ display: 'flex', alignItems: 'center', paddingY: 1, backgroundColor: '#f9f9f9', marginBottom: 1 }}
            >
              {/* Item Name */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1">{item.foodName}</Typography>
                <Typography variant="body2" color="text.secondary">${item.price.toFixed(2)}</Typography>
              </Box>

              {/* Quantity Controls */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={() => decrementItemQuantity(item.id)}
                  aria-label={`Decrease quantity of ${item.foodName}`}
                >
                  <Minus />
                </IconButton>
                <Typography sx={{ width: 30, textAlign: 'center' }} aria-label={`Quantity of ${item.foodName}`}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => incrementItemQuantity(item.id)}
                  aria-label={`Increase quantity of ${item.foodName}`}
                >
                  <Plus />
                </IconButton>
                <IconButton
                  onClick={() => removeItem(item.id)}
                  color="error"
                  aria-label={`Remove ${item.foodName} from order`}
                >
                  <X />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Total Price */}
      {selectedItemDetails.length > 0 ? (
        <Box sx={{ textAlign: 'right', marginTop: 2 }}>
          <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary" textAlign="center" mt={3}>
          Your order is empty
        </Typography>
      )}

      {/* Send to Kitchen Button */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button
          variant="contained"
          sx={{ marginTop: '30px', padding: '15px', backgroundColor: 'var(--primary-color)' }}
        >
          Send to Kitchen
        </Button>
      </div>
    </Paper>
  );
}
