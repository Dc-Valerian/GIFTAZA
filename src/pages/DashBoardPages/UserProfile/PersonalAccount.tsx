import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useAppSelector } from "../../../Global/Store";

const PersonalAccount = () => {
  const detailUser = useAppSelector((state) => state.userData);

  return (
    <Container>
      <NameCard>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Logo>
            <p>{detailUser?.name.charAt(0)}</p>
          </Logo>

          <Names>
            <div
              style={{
                color: "#444343",
                fontSize: "20px",
                fontWeight: "bold",
              }}>
              {detailUser?.name}
            </div>
            <div style={{ fontSize: "14px", color: "#082bf3" }}>
              @{detailUser?.username}
            </div>
          </Names>
        </div>
      </NameCard>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}>
        <Inputs>{detailUser?.name}</Inputs>
        <Inputs2>{detailUser?.username}</Inputs2>
        <Inputs2>{detailUser?.email}</Inputs2>
        <Inputs>{detailUser?.phoneNumber}</Inputs>
        {/* <Button>Update Profile</Button> */}
      </div>
      {/* <Button2>Update Profile</Button2> */}
    </Container>
  );
};

export default PersonalAccount;

const Input = styled.input`
  display: none;
`;

const Container = styled.div`
  width: 70%;
`;
const Inputs = styled.div`
  border: none;
  outline: none;
  width: calc(100% - 20px);

  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  display: flex;
  align-items: center;
`;
const Inputs2 = styled.div`
  border: none;
  outline: none;
  width: calc(100% - 20px);
  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  color: #8a8888;
  display: flex;
  align-items: center;
`;
const NameCard = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 2px solid #ececec;
`;
const Logo = styled.div`
  width: 55px;
  height: 60px;
  font-size: 23px;
  color: #082bf3;
  background-color: #ececec;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }
`;
const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 15px;
  margin-top: 30px;
  transition: all 350ms;
  font-weight: bold;
  :hover {
    background-color: #940294;
  }
`;
const Button2 = styled.button`
  position: absolute;
  top: 100px;
  right: 30px;
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 15px;
  transition: all 350ms;
  font-weight: bold;
  :hover {
    background-color: #940294;
  }
`;
