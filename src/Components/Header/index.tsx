import {
  Bell,
  BookBookmark,
  HourglassMedium,
  MagnifyingGlass,
} from 'phosphor-react';
import { HeaderContainer, HeaderContent } from './styles';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>NextProject</h1>
        <nav>
          <li>
            <HourglassMedium /> Home
          </li>
          <li>
            <BookBookmark /> Projetos
          </li>
          <li>
            <Bell />
            Sem ideia{' '}
          </li>
        </nav>
        <div className="input">
          <input type="text" />
          <button>
            <MagnifyingGlass size={20} />
          </button>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
