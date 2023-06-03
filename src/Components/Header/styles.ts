import styled from "styled-components";

export const HeaderContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
background: ${props => props.theme.colors.quartenaryColor};

`;
export const HeaderContent = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: solid 2px ${({ theme}) => theme.colors.primaryColor};
height: 100%;
color: ${({theme}) => theme.colors.primaryColor};
font-size: 1.5rem;
nav{
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
.input{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme.colors.sextenarycolor};
  color: ${({theme})=> theme.colors.primaryColor};
  height: 28px;
  border-radius: 25px;
  padding: 10px 10px 10px 25px;
}
input{
  padding: 5px;
  background-color: transparent;
  border: none;
  color:${({theme})=> theme.colors.primaryColor};
  outline: transparent;
  font-size: 1.1rem;
}
button{
  background: transparent;
  color: ${({theme})=>theme.colors.primaryColor};
  border: none;
  transition: 1s;
  &:hover{
    color: white;
    scale:1.2
  }

}
`;