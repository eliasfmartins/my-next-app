import { Card } from '@/Components/Card';
import { CardProps } from '@/Components/Card';
export const Posts = ({ posts }: object[]) => {
  return posts ? (
    posts.map(({ body, id, title, imgUrl }: CardProps) => (
      <Card key={id} body={body} id={id} imgUrl={imgUrl} title={title} />
    ))
  ) : (
    <h1>Carregando...</h1>
  );
};
{
  /* {posts ? (
          posts.map(({ body, id, title, imgUrl }) => (
            <Card key={id}
             body={body}
            id={id}
            imgUrl={imgUrl}
            title={title} />
          ))
        ) : (
          <h1>Carregando...</h1>
        )}
        </div> */
}
