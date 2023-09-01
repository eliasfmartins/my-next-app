'use client';
import styled from 'styled-components';
import Link from 'next/link';

export const CardContainer = styled.div`
padding: 4px;
position: relative;
gap: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid white;
border-radius: 8px;
max-width: 90%;
align-items: center;
justify-content: center;
img{
  border-radius: 8px 8px 0 0 ;
  min-width: 90%;
  height: 320px;
  width: 100%;
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
margin-bottom: 5px;
min-height: 400px;
h1{
  text-align: center;
}

div{
  display: flex;
  position: absolute;
  bottom: 5px;
  padding: 5px 25px;
  gap: 1rem;
  background-color: red;
}
`;
export const LinkStyle = styled(Link)`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;

button{
  padding: 5px;
  background: ${({ theme }) => theme.colors.sectenarycolor};
  border-radius: 12px 12px;
  color: white;
  border: solid 1px white;
  transition: 1s;
  &:hover{
    color: black;
    background: white;
  }
 
}
`;
