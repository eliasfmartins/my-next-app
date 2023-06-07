import {
  Bell,
  BookBookmark,
  FileSearch,
  HourglassMedium,
  MagnifyingGlass,
  X,
} from 'phosphor-react';
import { HeaderContainer, HeaderContent } from './styles';
import { useContext, useState } from 'react';
import { Context } from '@/contexts/searchContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { search, setSearch } = useContext(Context);
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
        <div className="input" onClick={() => setSearch(!search)}>
          {search ? (
            <button>
              <X size={25} />
            </button>
          ) : (
            <button>
              <MagnifyingGlass size={25} />
            </button>
          )}
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
