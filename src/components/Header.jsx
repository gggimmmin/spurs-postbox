import styled from "styled-components";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <>
      <Container>
        <Title>Spurs Fanletter</Title>
        <Tabs />
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;
