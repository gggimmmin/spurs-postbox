import styled from "styled-components";
import Header from "../components/Header";
import AddForm from "../components/AddForm";

const Home = () => {
  return (
    <Container>
      <Header />
      <AddForm />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
