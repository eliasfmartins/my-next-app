import styled from 'styled-components';
export const IdContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 84.8vh;
gap: 0 1rem ;
width: 100%;
img{
  margin-top: 20px;
  width: 300px;
  border-radius: 12px;
}
@media (max-width:700px){
 flex-direction: column;
}
`;

export const IdContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 40%;
color: ${({ theme }) => theme.colors.primaryColor};
font-family: robotto;
padding: 25px;
button{
  width: 120px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.quartenaryColor};
  color: lightcyan;
}
@media (max-width:700px){
width: 80%;
}
`;
