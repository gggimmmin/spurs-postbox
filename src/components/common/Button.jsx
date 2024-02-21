import styled from "styled-components";

const Button = ({ text, onclick = () => {} }) => {
  return (
    <BtnWrapper>
      <button onClick={onclick}>{text}</button>
    </BtnWrapper>
  );
};

export default Button;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
`;
