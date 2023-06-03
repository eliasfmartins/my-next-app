import styled from "styled-components";

export const FooterContainer = styled.footer`
display: flex;
align-items: center;
justify-content: center;
height: 40px;
width: 100%;
background: ${({ theme}) => theme.colors.primaryColor};
`;
export const FooterContent = styled.div`
max-width: 1200px;
display: flex;
align-items: center;
justify-content: center;
margin-top: solid 2px ${({ theme}) => theme.colors.primaryColor};

`;