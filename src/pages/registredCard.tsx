import { RegisterContainer, RegisterContent } from "@/styles/registerStyle";
import { FormEvent, useState } from "react";

export default function RegisterCard () {
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('titleCard') as string;
    const text = formData.get('text') as string
    const imgsrc = formData.get('imgsrc') as string
    // aqui a logica pra criar o novo card


    setSuccess(true);
    //limpar campos após o envio
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