import {
  Bell,
  BookBookmark,
  FileSearch,
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
        <nav className={isOpen ? 'actived' : ''}>
          <li onClick={() => setIsOpen(false)}>
            <HourglassMedium /> Home
          </li>
          <li onClick={() => setIsOpen(false)}>
            <BookBookmark /> Projetos
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Bell />
            Sem ideia{' '}
          </li>
          <li className="search" onClick={() => setIsOpen(false)}>
            <FileSearch />
            Sarch{' '}
          </li>
        </nav>
        <div className="input">
          <input type="text" />
          <button>
            <MagnifyingGlass size={20} />
          </button>
        </div>
        <button
          className={isOpen ? 'mobile actived' : 'mobile'}
          onClick={() => setIsOpen((e) => !e)}
        >
          <hr className="one" />
          <hr className="two" />
          <hr className="tree" />
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
};
