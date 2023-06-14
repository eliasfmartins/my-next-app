import { useRouter } from 'next/router';

export interface CardProps {
  // id: number;
  title: string;
  body: string;
  imgUrl: string;
}
export const PageCards = ({ body, imgUrl, title }: CardProps) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <img src={imgUrl} alt="description" />
      <div>
        <h2>{id}</h2>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
