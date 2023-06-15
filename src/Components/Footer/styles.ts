import styled from 'styled-components';

export const FooterContainer = styled.footer`
display: flex;
align-items: center;
justify-content: center;
height: 30px;
width: 100%;
background: ${({ theme }) => theme.colors.quartenaryColor};
`;
export const FooterContent = styled.div`
max-width: 1200px;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
border-top: solid 2px ${({ theme }) => theme.colors.primaryColor};
color:  ${({ theme }) => theme.colors.primaryColor};
a{
  color: white;
  text-decoration: none;
}
`;
