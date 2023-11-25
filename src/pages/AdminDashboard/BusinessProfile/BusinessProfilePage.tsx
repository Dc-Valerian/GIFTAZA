import React from "react";
import styled from "styled-components";
import PersonalAccountSetup from "./PersonalAccountSetup";
import SecureAccountSetUp from "./SecureAccountSetUp";

const BusinessProfilePage = () => {
  const [person, setPerson] = React.useState(true);
  const [secure, setSecure] = React.useState(false);
  return (
    <Container>
      <Head>
        <HoldToggle>
          <h2>Profile</h2>
          <ToggleHold>
            <Toggle
              onClick={() => {
                setPerson(true);
                setSecure(false);
              }}
              cls={person ? "#2343f7" : "#585858"}
              bdb={person ? "3px solid #2343f7" : ""}
            >
              Personal
            </Toggle>
            <Toggle
              onClick={() => {
                setPerson(false);
                setSecure(true);
              }}
              cls={secure ? "#585858" : "#2343f7"}
              bdb={secure ? "" : "3px solid #2343f7"}
            >
              Security
            </Toggle>
          </ToggleHold>
        </HoldToggle>
        {person ? (
          <>
            <PersonalAccountSetup />
          </>
        ) : (
          <>
            <SecureAccountSetUp />
          </>
        )}
      </Head>
    </Container>
  );
};

export default BusinessProfilePage;

const Container = styled.div`
  width: 100vw;
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
  h2 {
    font-size: 17px;
    color: #383838;
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
  color: ${(props) => props.cls};
  border-bottom: ${(props) => props.bdb};
`;
