interface CardProps {
  id:number
  title: string
  body: string
  imgUrl: string
}

export const Card = ({id,title,body,imgUrl}:CardProps) => {
return(
  <div key={id}>
    <img src={imgUrl} alt="" />
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
)
}