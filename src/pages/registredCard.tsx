import { handlePosts } from "@/app/fetch";
import { RegisterContainer, RegisterContent } from "@/styles/registerStyle";
import { FormEvent, useState } from "react";

interface Card {
  id: number;
  title: string;
  text: string;
  imgsrc: string;
}

export default function RegisterCard () {
  const [success, setSuccess] = useState(false);
  const [posts, setPosts] = useState<Card[]>([]);

  
  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    

    const newCard: Card ={
      id:Date.now(),
      title:formData.get('titleCard') as string,
      text: formData.get('text') as string,
      imgsrc:formData.get('imgsrc') as string,
    };

      setPosts(prevPosts => [...prevPosts, newCard]);

      setSuccess(true);
      event.currentTarget.reset();

   
  };
  

  return(
    <RegisterContainer>
      <RegisterContent>

    <h1>New Card</h1>
    <form onSubmit={handleFormSubmit}>
    <label htmlFor="titleCard">Title Card</label>
      <input type="text" id="titleCard" />
    <label htmlFor="text">Text </label>
      <input type="text" id="text" />
    <label htmlFor="imgsrc">Img:src</label>
      <input type="text" id="imgsrc"/>
      <button type="submit">Send</button>
    </form>
      { success && <p>Card Successfully created!</p>}
      </RegisterContent>
      
    </RegisterContainer>
  )
}
