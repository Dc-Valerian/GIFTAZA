import React from "react";
import styled from "styled-components";
// import pic from "../Images/trancard.svg";
import CreateCard from "./CreateCard";
import ViewCards from "./ViewCards";

const BusinessCard = () => {
  const [person, setPerson] = React.useState(true);
  const [secure, setSecure] = React.useState(false);
  return (
    <Container>
      <Head>
        <HoldToggle>
          <h2>Gift Cards</h2>
          <ToggleHold>
            <Toggle
              onClick={() => {
                setPerson(true);
                setSecure(false);
              }}
              cls={person ? "#2343f7" : "#585858"}
              bdb={person ? "3px solid #2343f7" : ""}
            >
              New Gift Card
            </Toggle>
            <Toggle
              onClick={() => {
                setPerson(false);
                setSecure(true);
              }}
              cls={secure ? "#2343f7" : "#585858"}
              bdb={secure ? "3px solid #2343f7" : ""}
            >
              Gift Cards
            </Toggle>
          </ToggleHold>
        </HoldToggle>
      </Head>{" "}
      {person ? <CreateCard /> : null}
      {!person && secure ? <ViewCards /> : null}
    </Container>
  );
};

export default BusinessCard;

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
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
    font-weight: 600;
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
