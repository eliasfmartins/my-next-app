import {
  Bell,
  BookBookmark,
  HourglassMedium,
  MagnifyingGlass,
  X,
} from 'phosphor-react';
import { HeaderContainer, HeaderContent } from './styles';
import { useContext, useState } from 'react';
import { Context } from '@/contexts/searchContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { search, setSearch } = useContext(Context);
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href={'/'}>
          <h1>NextPJ</h1>
        </Link>
        <nav className={isOpen ? 'actived' : ''}>
          <Link href={'/'}>
            <li onClick={() => setIsOpen(false)}>
              <HourglassMedium /> Home
            </li>
          </Link>
          <Link href={'/'}>
            <li onClick={() => setIsOpen(false)}>
              <BookBookmark /> Projetos
            </li>
          </Link>
          <Link href={'/'}>
            <li onClick={() => setIsOpen(false)}>
              <Bell />
              Sem ideia{' '}
            </li>
          </Link>
          {/* <li className="search" onClick={() => setIsOpen(false)}>
            <FileSearch />
            Search{' '}
          </li> */}
        </nav>
        <div className={isOpen ? 'input fixed' : 'input'}>
          {search ? (
            <button
              className="busca"
              disabled={!isHomePage}
              onClick={() => setSearch(!search)}
            >
              <X size={25} />
            </button>
          ) : (
            <button
              className="busca"
              disabled={!isHomePage}
              onClick={() => setSearch(!search)}
            >
              <MagnifyingGlass size={25} />
            </button>
          )}
          <button
            className={isOpen ? 'mobile actived' : 'mobile'}
            onClick={() => setIsOpen((e) => !e)}
          >
            <hr className="one" />
            <hr className="two" />
            <hr className="tree" />
          </button>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
