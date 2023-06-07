'use client';
import React, { createContext, useState } from 'react';

type ContextType = {
  search: boolean;
  setSearch: (value: boolean) => void;
};
export const Context = createContext<ContextType>({
  search: false,
  setSearch: () => {},
});
export const SearchContext = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState(false);
  return (
    <Context.Provider value={{ search, setSearch }}>
      {children}
    </Context.Provider>
  );
};
