'use client'
import styled from "styled-components";

export const PageContainer = styled.main`

height: auto;

display: flex;
align-items: center;
justify-content: center;
background: ${({theme}) => theme.colors.quartenaryColor};
`;
export const PageContent = styled.div`
margin-top: 20px;
min-height:calc(100vh - 91px);
max-width: 1200px;
color: ${({theme}) => theme.colors.primaryColor};
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
`;