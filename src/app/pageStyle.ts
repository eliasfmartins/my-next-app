import styled from "styled-components";

export const PageContainer = styled.main`

height: auto;

display: flex;
align-items: center;
justify-content: center;
background: ${({theme}) => theme.colors.quartenaryColor};
`;
export const PageContent = styled.div`
min-height:calc(100vh - 91px);
max-width: 1200px;
width: 100%;
color: ${({theme}) => theme.colors.primaryColor};

`;