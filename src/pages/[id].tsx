import { useRouter } from 'next/router';
import { IdContainer, IdContent } from '../styles/[id]';

export default function CardPage() {
  const { query, back } = useRouter();
  const { id, imgUrl, body, title } = query;

  return (
    <IdContainer>
      {imgUrl ? <img src={String(imgUrl)} alt="nothing" /> : 'nada a exibir'}
      <IdContent>
        <h1>{title}</h1>
        <h2>Card ID: {id}</h2>
        <p>{body}</p>
        <button onClick={() => back()}>back</button>
      </IdContent>
    </IdContainer>
  );
}
