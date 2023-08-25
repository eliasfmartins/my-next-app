import { createContext, useContext, useState, ReactNode } from 'react';

interface Card {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}

interface NewCardsContextData {
  newCards: Card[];
  addNewCard: (card: Card) => void;
}

const NewCardsContext = createContext<NewCardsContextData | undefined>(undefined);

interface NewCardsProviderProps {
  children: ReactNode;
}

export function NewCardsProvider({ children }: NewCardsProviderProps) {
  const [newCards, setNewCards] = useState<Card[]>([]);

  const addNewCard = (card: Card) => {
    setNewCards((prevCards) => [...prevCards, card]);
  };

  return (
    <NewCardsContext.Provider value={{ newCards, addNewCard }}>
      {children}
    </NewCardsContext.Provider>
  );
}

export function useNewCards() {
  const context = useContext(NewCardsContext);
  if (!context) {
    throw new Error('useNewCards must be used within a NewCardsProvider');
  }
  return context;
}
