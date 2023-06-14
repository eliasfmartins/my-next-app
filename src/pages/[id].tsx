import { useRouter } from 'next/router';

export default function CardPage() {
  const { query, back } = useRouter();
  const { id, imgUrl, body, title } = query;

  return (
    <div>
      <h1>Card ID: {id}</h1>
      <img src={imgUrl} alt="nothing" />
      <h2>{title}</h2>
      <p>{body}</p>

      <button onClick={() => back()}>back</button>
    </div>
  );
}
