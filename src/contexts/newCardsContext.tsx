import React, { createContext, useContext, useState } from "react";
type ContextType = {
  search: boolean;
  setSearch: (value: boolean) => void;
};
const NewCardsContext = createContext<ContextType>({
  search: false,
  setSearch: () => {},
});

export function NewCardProvider({children}:{children:React.ReactNode}) {
  const [newCards, setNewCards] = useState([]);
  const addNewCard = (card) => {
    setNewCards((prevCards) => [...prevCards,card]);
  };
  return (
    <NewCardsContext.Provider value={{ newCards, addNewCard}}>
      {children}
    </NewCardsContext.Provider>
  );
}
export function useNewCards(){
  return useContext(NewCardsContext)
}
