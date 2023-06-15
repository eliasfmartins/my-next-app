import { Card } from '@/Components/Card';
import { CardProps } from '@/Components/Card';
interface PostsProps {
  filteredPosts: CardProps[];
}
export const Posts = ({ filteredPosts }: PostsProps) => {
  return filteredPosts ? (
    filteredPosts.map(({ body, id, title, imgUrl }: CardProps) => (
      <Card key={id} body={body} id={id} imgUrl={imgUrl} title={title} />
    ))
  ) : (
    <h1>Carregando...</h1>
  );
};
