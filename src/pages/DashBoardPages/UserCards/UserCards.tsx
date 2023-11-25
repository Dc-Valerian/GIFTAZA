import styled from "styled-components";
import OnlyViewCards from "./OnlyView";
// import pic from "../Images/trancard.svg";

const UserCards = () => {
  return (
    <Container>
      <Head>
        <HoldToggle>
          <h2>My Gift Cards</h2>
        </HoldToggle>
        <OnlyViewCards />
      </Head>
    </Container>
  );
};

export default UserCards;

const Container = styled.div`
  width: calc(100%-20%);
  overflow: hidden;
`;
const Head = styled.div`
  width: calc(100% - 47px);
  padding-left: 23px;
  padding-right: 23px;
  height: 150px;
  background-color: #f1f1f1;
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