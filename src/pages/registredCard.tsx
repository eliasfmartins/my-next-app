import { RegisterContainer, RegisterContent } from "@/styles/registerStyle";

export default function RegisterCard () {
  return(
    <RegisterContainer>
      <RegisterContent>

    <h1>New Card</h1>
    <label htmlFor="">
      <input type="text" />
    </label>

      </RegisterContent>
    </RegisterContainer>
  )
}