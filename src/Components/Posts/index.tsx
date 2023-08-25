import { Card } from '@/Components/Card';
import { CardProps } from '@/Components/Card';
interface PostsProps {
  allDisplayedPosts: CardProps[];
}
export const Posts = ({ allDisplayedPosts }: PostsProps) => {
  return allDisplayedPosts ? (
    allDisplayedPosts.map(({ body, id, title, imgUrl }: CardProps) => (
      <Card key={id} body={body} id={id} imgUrl={imgUrl} title={title} />
    ))
  ) : (
    <h1>Carregando...</h1>
  );
};
