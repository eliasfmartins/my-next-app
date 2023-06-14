'use client';
import Link from 'next/link';
import { CardContainer, CardContent } from './styles';

export interface CardProps {
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
        <Link href={`${id}?title=${title}&body=${body}&imgUrl=${imgUrl}`}>
          <button>Click for more...</button>
        </Link>
      </CardContent>
    </CardContainer>
  );
};
