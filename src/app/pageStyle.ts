'use client';
import styled from 'styled-components';
export const PageContainer = styled.main`
height: auto;
display: flex;
align-items: center;
justify-content: center;
background: ${({ theme }) => theme.colors.quartenaryColor};
`;
export const PageContent = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
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
