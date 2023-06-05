'use client'
import styled from "styled-components";

export const CardContainer = styled.div`
position: relative;

margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid white;
border-radius: 8px;
img{
  border-radius: 8px 8px 0 0 ;
  min-width: 300px;
  width: 100%;
}
button{
  position: absolute;
  bottom: 5px;
  padding: 5px 25px;
  background: ${({theme})=> theme.colors.sectenarycolor};
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
padding: 10px;
margin-bottom: 20px;

h1{
  margin: 0;
  padding-top: 5px;
  width: 90%;
  text-align: center;
  border-top: 2px solid white;
}


`;