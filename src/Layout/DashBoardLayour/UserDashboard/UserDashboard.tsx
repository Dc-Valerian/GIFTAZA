import styled from "styled-components";

import moment from "moment";
import img from "../../../Assets/me.jpg";
import { useSelector } from "react-redux";

const UserDashBoardHead = () => {
  const toggle = useSelector((state: any) => state.toggle);

  return (
    <Container wd={toggle ? "value" : ""}>
      <Wrapper>
        <Name>All Gift Cards</Name>

        <Profile>
          <UserImage src={img} alt="Profile Image" />
          <UserName>
            {moment(Date.now()).format("LLLL")}
            {/* {moment(Date.now()).format("MMM Do YYYY")} */}
          </UserName>
        </Profile>
      </Wrapper>
    </Container>
  );
};

export default UserDashBoardHead;
const Wrapper = styled.div`
  /* background-color: goldenrod; */
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  /* background-color: #F15A22; */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;

const SearchIcon = styled.div`
  /* color: rgb(0, 0, 0, 0.5); */
  color: black;
  font-size: 17px;
  margin-left: 14px;
  margin-top: 3px;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  /* border: 1px solid black; */
  width: 340px;
  height: 40px;
  overflow: hidden;
  border-radius: 50px;
  @media screen and (max-width: 769px) {
    width: 220px;
  }
  @media screen and (max-width: 388px) {
    width: 155px;
  }
  input {
    height: 100%;
    flex: 1;
    border: 0;
    outline: none;
    background-color: transparent;
    margin-left: 10px;

    &::placeholder {
      font-size: 15px;
      text-transform: capitalize;
    }
  }
`;

const Container = styled.div<{ wd: string }>`
  display: flex;
  width: calc(100% - ${({ wd }) => (wd ? "204" : "84")}px);
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 130px;
  color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  top: 0;
  z-index: 1;
  background-color: #f1f1f1;
  transition: all 360ms;

  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 577px) {
    justify-content: flex-end;
    gap: 5px;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 20px; */
`;
const Name = styled.div`
  margin-left: 60px;
  font-size: 35px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;
const Name2 = styled.div`
  margin-left: 60px;
  font-size: 19px;
  color: black;
  display: none;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    display: flex;
    margin-right: 20px;
    margin-left: 120px;
  }
  @media screen and (max-width: 577px) {
    display: none;
  }
`;
const Notification = styled.div`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: black;
  font-size: 30px;
  transition: all 500ms;
  @media screen and (max-width: 769px) {
    font-size: 25px;
  }
  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  transition-timing-function: all 450ms;

  @media screen and (max-width: 500px) {
    background-color: goldenrod;
  }
`;
const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  background-color: #fff;
  @media screen and (max-width: 769px) {
    width: 30px;
    height: 30px;
  }
`;
const UserName = styled.span`
  text-transform: capitalize;
  padding: 5px;
  color: black;
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
  @media screen and (max-width: 523px) {
    /* display: none; */
  }
`;
