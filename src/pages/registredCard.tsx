import { useNewCards } from "@/contexts/newCardsContext";
import { RegisterContainer, RegisterContent } from "@/styles/registerStyle";
import { FormEvent, useState } from "react";

interface Card {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}

export default function RegisterCard () {
  const [success, setSuccess] = useState(false);
  const {addNewCard } = useNewCards();

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    

    const newCard: Card ={
      id:Date.now(),
      title:formData.get('titleCard') as string,
      body: formData.get('text') as string,
      imgUrl:formData.get('imgsrc') ? (formData.get('imgsrc') as string):'https://i.pinimg.com/originals/3d/54/18/3d54183e06a65ee57b3ca27dd330157d.jpg'
    };
      addNewCard(newCard);

      setSuccess(true);
      event.currentTarget.reset();

   
  };
  

  return(
    <RegisterContainer>
      <RegisterContent>

    <h1>New Card</h1>
    <form onSubmit={handleFormSubmit}>
    <label htmlFor="titleCard">Title Card</label>
      <input type="text" id="titleCard" name="titleCard" />
    <label htmlFor="text">Text </label>
      <input type="text" id="text" name="text" />
    <label htmlFor="imgsrc">Img:src</label>
      <input type="text" id="imgsrc" name="imgsrc"/>
      <button type="submit">Send</button>
    </form>
      { success && <p>Card Successfully created!</p>}
      </RegisterContent>
      
    </RegisterContainer>
  )
}
