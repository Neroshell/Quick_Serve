// PageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PageContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Order Food'); // Default to 'Order Food'

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
