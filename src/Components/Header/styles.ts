'use client';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
background: ${(props) => props.theme.colors.quartenaryColor};


`;
export const HeaderContent = styled.div`
max-width: 1200px;
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: solid 2px ${({ theme }) => theme.colors.primaryColor};
height: 100%;
color: ${({ theme }) => theme.colors.primaryColor};
font-size: 1.5rem;
nav{
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: 1.5s;
}
.search{
  display: none;
}
li{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 1s;
  &:hover{
    color: white;
  }
}
a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryColor};
}
.input{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.sextenarycolor};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding: 8px;
  border-radius: 12px;
  transition: 1s;
}

button.mobile{
    display: none;
    visibility: hidden;
    z-index: 20000;
  hr{
    border-radius: 5px;
    cursor: pointer;
  }
  }
  hr{
      width: 40px;
      border-radius: 20px;
      padding: 2px;
      background-color: white;
      transition: 1.2s;
    }
button{
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};
  border: none;
  transition: 1s;
  &:hover{
    color: white;
    scale:1.2
  }
  .busca{
    position: absolute;
    left: 0;
  }


}
@media (max-width:1200px){
  button.mobile{
    display: block;
    visibility: visible;
    top: 0px;
    right: 2px;

  }
  .input{
    display: flex;
    gap: 1rem;
    right: 0;
    height: 35px;
    width: 120px;
  }
  nav{
    position: absolute;
    height:0;
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: space-evenly ;
    gap: 2rem;
    visibility: hidden;
    transition: height 1.2s;
    background-color: ${({ theme }) => theme.colors.quintenaryColor};
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow:hidden ;
    transition: 1.5s;

  }
  nav.actived{
    position: fixed;
    visibility: visible;
    width: 100%;
    height: 100%;
    transition: 1.5s;

  }
  div.input.fixed{
      visibility: visible;
      position: fixed;
      z-index: 500000;
      background: transparent;
      right: 5%;
      .busca{
        visibility: hidden;
      }

    hr.one{
      transform: rotate(405deg);
      position: relative;
      bottom: -16px;
    }
    hr.two{
      background: transparent;
      border: transparent;
    }
    hr.tree{
      transform: rotate(-405deg);
      position: relative;
      top: -8px;
    }

    }
    @media (max-width:650px){
      .input{
      position: relative;
      right: 0px;
    }
      .search{
      display: block;
      }
    }
}
`;
