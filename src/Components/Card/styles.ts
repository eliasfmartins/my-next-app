import styled from 'styled-components';

export const CardContainer = styled.div`
position: relative;
gap: 1rem;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid white;
border-radius: 8px;
img{
  border-radius: 8px 8px 0 0 ;
  min-width: 280px;
  width: 100%;
}
button{
  position: absolute;
  bottom: 5px;
  padding: 5px 25px;
  background: ${({ theme }) => theme.colors.sectenarycolor};
  border-radius: 12px 12px;
  color: white;
  border: solid 1px white;
  &:hover{
    color: black;
    background: white;
  }
}
`;
export const CardContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-top:2px solid white ;
width: 95%;
padding: 5px;
margin-bottom: 25px;
min-height: 300px;
h1{
  text-align: center;
}
`;
