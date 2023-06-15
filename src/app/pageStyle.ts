import styled from 'styled-components';
export interface InputFildProps {
  variable: boolean;
}
export const PageContainer = styled.main`
height: auto;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
background: red;
background: ${({ theme }) => theme.colors.quartenaryColor};
`;
export const PageContent = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  div.cards{
    align-items: center;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1rem;
  }
`;
export const InputField = styled.div<InputFildProps>`
display: flex;
flex-direction: column;
align-items: center;
transition: 1s;
width: 100%;
height: ${({ variable }) => (variable ? '120px' : '0')};
padding:${({ variable }) => (variable ? '20px 0' : '0')};
visibility: ${({ variable }) => (variable ? 'visible' : 'hidden')};
overflow: hidden;
h1{
  color: white;
}
.input{
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.sextenarycolor};
  color: ${({ theme }) => theme.colors.primaryColor};
  height: 28px;
  border-radius: 25px;
  padding: 10px 10px 10px 25px;
  gap: 1rem;
}
input{
  padding: 5px;
  width: 80%;
  background-color: transparent;
  border: none;
  color:${({ theme }) => theme.colors.primaryColor};
  outline: transparent;
  font-size: 1.1rem;
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
}
`;
