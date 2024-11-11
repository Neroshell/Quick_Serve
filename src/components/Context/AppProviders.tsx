// src/components/Context/AppProviders.tsx
import React from 'react';
import { PageProvider } from '@/components/Context/PageContext';
// Example of another context

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PageProvider>
        {/* Add more providers here as needed */}
        {children}
    </PageProvider>
  );
};

export default AppProviders;
