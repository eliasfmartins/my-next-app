import { Card } from '@/Components/Card';
import { CardProps } from '@/Components/Card';
interface PostsProps {
  allDisplayedPosts: CardProps[];
  onDelete: (id: number) => void
}
export const Posts = ({ allDisplayedPosts, }: PostsProps) => {
  return allDisplayedPosts ? (
    allDisplayedPosts.map(({ body, id, title, imgUrl, onDelete }: CardProps) => (
      <Card
        key={id}
        body={body} id={id}
        imgUrl={imgUrl}
        title={title}
        onDelete={onDelete} />
    ))
  ) : (
    <h1>Carregando...</h1>
  );
};
