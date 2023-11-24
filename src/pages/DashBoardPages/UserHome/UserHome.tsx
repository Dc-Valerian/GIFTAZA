import styled from "styled-components";
import ViewCards from "./ViewCards";

const UserHome = () => {
  return (
    <Container>
      <ViewCards />
    </Container>
  );
};

export default UserHome;

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
margin-top: 80px;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #706e70;
    border-radius: 20px;
  }
`;
