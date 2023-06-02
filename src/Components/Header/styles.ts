import styled from "styled-components";

export const HeaderContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
`;
export const HeaderContent = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid lightblue;

div {
  display: flex;
  width: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 5px;

}
button {
  background: transparent;
  border: none;
  position: absolute;
  right: 15px;
  top: 12px;
}

`;
export const InputSearch = styled.input`
  border-radius: 12px;
  padding: 15px 18px;
  line-height: 20px;
  width: 100%;
`;