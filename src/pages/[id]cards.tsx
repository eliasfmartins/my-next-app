export interface CardProps {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}
export const PageCards = ({ id, body, imgUrl, title }: CardProps) => {
  return (
    <div key={id}>
      <img src={imgUrl} alt="description" />
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
