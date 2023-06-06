'use client';
import { CardContainer, CardContent } from './styles';

interface CardProps {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}

export const Card = ({ id, title, body, imgUrl }: CardProps) => {
  return (
    <CardContainer key={id}>
      <img src={imgUrl} alt="" />
      <CardContent>
        <h1>{title}</h1>
        <p>{body}</p>
        <button>Click for more...</button>
      </CardContent>
    </CardContainer>
  );
};
