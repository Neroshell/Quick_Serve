import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SelectedItem {
  id: string;
  foodName: string;
  price: number;
  quantity: number; // Add quantity to the SelectedItem interface
}

interface SelectionStore {
  selectedItems: Record<string, boolean>;  // Track whether item is selected
  selectedItemDetails: SelectedItem[];    // Track the full item details
  selectionCount: number;  // Track the total number of selected items
  toggleItemSelection: (item: SelectedItem) => void;  // Toggle item selection
  incrementItemQuantity: (id: string) => void; // Increment quantity
  decrementItemQuantity: (id: string) => void; // Decrement quantity
}

export const useSelectionStore = create(
  persist<SelectionStore>(
    (set, get) => ({
      selectedItems: {},
      selectedItemDetails: [],
      selectionCount: 0, // Initialize selection count

      toggleItemSelection: (item: SelectedItem) => {
        const { selectedItems, selectedItemDetails, selectionCount } = get();
        const isSelected = selectedItems[item.id] ?? false;

        const updatedItemDetails = isSelected
          ? selectedItemDetails.filter((selected) => selected.id !== item.id)
          : [...selectedItemDetails, { ...item, quantity: 1 }]; // Initialize quantity

        set({
          selectedItems: {
            ...selectedItems,
            [item.id]: !isSelected,
          },
          selectedItemDetails: updatedItemDetails,
          selectionCount: isSelected ? selectionCount - 1 : selectionCount + 1,
        });
      },

      incrementItemQuantity: (id: string) => {
        const { selectedItemDetails } = get();
        const updatedItems = selectedItemDetails.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        set({ selectedItemDetails: updatedItems });
      },

      decrementItemQuantity: (id: string) => {
        const { selectedItemDetails } = get();
        const updatedItems = selectedItemDetails.map(item =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        set({ selectedItemDetails: updatedItems });
      },
    }),
    {
      name: 'selection-store',
    }
  )
);
