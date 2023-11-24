import React from "react";
import styled from "styled-components";

import PersonalAccount from "./UserProfile/PersonalAccount";
import SecureAccount from "./UserProfile/Secure.Account";

const UserProfile = () => {
  const [person, setPerson] = React.useState(true);
  const [secure, setSecure] = React.useState(false);
  return (
    <Container>
      <Head>
        <HoldToggle>
          <h2>Account</h2>
          <ToggleHold>
            <Toggle
              onClick={() => {
                setPerson(true);
                setSecure(false);
              }}
              cls={person ? "#2343f7" : "#585858"}
              bdb={person ? "3px solid #2343f7" : ""}>
              Personal
            </Toggle>
            <Toggle
              onClick={() => {
                setPerson(false);
                setSecure(true);
              }}
              cls={person ? "#585858" : "#2343f7"}
              bdb={person ? "" : "3px solid #2343f7"}>
              Security
            </Toggle>
          </ToggleHold>
        </HoldToggle>
        {person ? (
          <>
            <PersonalAccount />
          </>
        ) : (
          <>
            <SecureAccount />
          </>
        )}
      </Head>
    </Container>
  );
};

export default UserProfile;

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
  h2 {
    font-size: 17px;
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
