import styled from "styled-components";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
