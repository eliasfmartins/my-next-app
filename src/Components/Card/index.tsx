'use client';
import { useContext } from 'react';
import { CardContainer, CardContent, LinkStyle } from './styles';
import { Context } from '@/contexts/searchContext';

export interface CardProps {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
  onDelete?: (postId: number) => void
}

export const Card = ({ id, title, body, imgUrl, onDelete }: CardProps) => {
  const { search, setSearch } = useContext(Context);

  const handleDelete = (id: number) => {
    if (onDelete) {
      onDelete(id);
      console.log('cheguei aqui')
    }
  };

  return (
    <CardContainer key={id}>
      <img src={imgUrl} alt="" />
      <CardContent>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
          <LinkStyle href={`${id}?title=${title}&body=${body}&imgUrl=${imgUrl}`}>
            <button onClick={() => setSearch(search === true)}>
              Click for more...
            </button>
          </LinkStyle>

          <button onClick={() => handleDelete(id)}>Delete Post</button>
        </div>
      </CardContent>
    </CardContainer>
  );
};
