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
  width: 100vw;
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
const ToggleHold = styled.div`
  display: flex;
  gap: 40px;
  font-size: 14px;
`;

const Toggle = styled.div<{ cls: string; bdb: string }>`
  padding-bottom: 7px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media screen and (min-width: 800px) {
    font-size: 17px;
  }
  color: ${(props) => props.cls};
  border-bottom: ${(props) => props.bdb};
`;
const Button = styled.div`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 140px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 15px;
  margin-top: 30px;
  transition: all 350ms;
  :hover {
    background-color: #940294;
  }
`;

const Nothing = styled.div`
  width: 100%;
  height: calc(100vh - 205px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterHold = styled.div`
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Pic = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 50%;
  }
`;
const Txt = styled.div`
  font-size: 14px;
  color: gray;
  font-weight: bold;
`;
const Sxt = styled.div`
  font-size: 12px;
  max-width: 250px;
`;
