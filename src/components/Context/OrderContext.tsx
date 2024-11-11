import React, { createContext, useContext, useState } from "react";

// Interface for provider props
interface Props {
  children: React.ReactNode;
}

// Interface for context values
interface Context {
  foodItem: string;
  addItem: (item: string) => void;
}

// Create context with initial value `null`
const OrderContext = createContext<Context | null>(null);

export const OrderProvider: React.FC<Props> = ({ children }) => {
  const [foodItem, setFoodItem] = useState<string>("");

  // Function to update the food item
  const addItem = (item: string) => {
    setFoodItem(item);
  };

  return (
    <OrderContext.Provider value={{ foodItem, addItem }}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to use OrderContext
export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (context === null) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }

  return context;
};
