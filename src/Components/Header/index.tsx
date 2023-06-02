import { MagnifyingGlass } from 'phosphor-react';
import { HeaderContainer, HeaderContent, InputSearch } from './styles';

export const Header = () => {
  return(
    <HeaderContainer>
      <HeaderContent>
      <h1>You Products</h1>
      <div>
        <InputSearch type="text" />
        <button>
        <MagnifyingGlass size={30}/>
        </button>
      </div>
      </HeaderContent>
    </HeaderContainer>
  )
}