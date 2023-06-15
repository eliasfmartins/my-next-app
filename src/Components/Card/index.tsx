'use client';
import { useContext } from 'react';
import { CardContainer, CardContent, LinkStyle } from './styles';
import { Context } from '@/contexts/searchContext';

export interface CardProps {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}

export const Card = ({ id, title, body, imgUrl }: CardProps) => {
  const { search, setSearch } = useContext(Context);
  return (
    <CardContainer key={id}>
      <img src={imgUrl} alt="" />
      <CardContent>
        <h1>{title}</h1>
        <p>{body}</p>
        <LinkStyle href={`${id}?title=${title}&body=${body}&imgUrl=${imgUrl}`}>
          <button onClick={() => setSearch(search === false)}>
            Click for more...
          </button>
        </LinkStyle>
      </CardContent>
    </CardContainer>
  );
};
