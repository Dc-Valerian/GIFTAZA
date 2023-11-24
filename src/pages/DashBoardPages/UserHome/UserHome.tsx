import styled from "styled-components";
import ViewCards from "./ViewCards";

const UserHome = () => {
  return (
    <Container>
      <Head>
        <HoldToggle>
          <h2>All Gift Cards</h2>
        </HoldToggle>
      </Head>
      <ViewCards />
    </Container>
  );
};

export default UserHome;

const Container = styled.div`
  width: calc(100%-20%);
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #706e70;
    border-radius: 20px;
  }
`;
const Head = styled.div`
  width: calc(100% - 47px);
  padding-left: 23px;
  padding-right: 23px;
  height: 150px;
  background-color: #f1f1f1;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const HoldToggle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #5e5d5d;
  h2 {
    font-size: 17px;
    @media screen and (min-width: 800px) {
      font-size: 35px;
    }
  }
`;
