import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SelectionStore {
  selectionCount: number;
  selectedItems: Record<string, boolean>; // Stores the selection status of each item
  increaseSelectionCount: () => void;
  decreaseSelectionCount: () => void;
  toggleItemSelection: (itemId: string) => void;
}

export const useSelectionStore = create(
  persist<SelectionStore>(
    (set) => ({
      selectionCount: 0,
      selectedItems: {},

      // Increment the selection count
      increaseSelectionCount: () =>
        set((state) => ({ selectionCount: state.selectionCount + 1 })),

      // Decrement the selection count
      decreaseSelectionCount: () =>
        set((state) => ({ selectionCount: state.selectionCount - 1 })),

      // Toggle selection state of an item and update count accordingly
      toggleItemSelection: (itemId: string) =>
        set((state) => {
          const isCurrentlySelected = state.selectedItems[itemId] ?? false;
          const newSelectionCount = isCurrentlySelected
            ? state.selectionCount - 1
            : state.selectionCount + 1;
          return {
            selectionCount: newSelectionCount,
            selectedItems: {
              ...state.selectedItems,
              [itemId]: !isCurrentlySelected,
            },
          };
        }),
    }),
    {
      name: 'selection-store', // The key for localStorage
    }
  )
);
