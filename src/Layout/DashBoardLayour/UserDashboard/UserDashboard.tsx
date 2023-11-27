import styled from "styled-components";
import moment from "moment";
import { useSelector } from "react-redux";

const UserDashBoardHead = () => {
  const toggle = useSelector((state: any) => state.toggle);

  return (
    <Container wd={toggle ? "value" : ""}>
      <Wrapper>
        <Name>All Gift Cards</Name>

        <Profile>
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

const UserName = styled.span`
  text-transform: capitalize;
  padding: 5px;
  color: black;
  font-size:20px;
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
  @media screen and (max-width: 523px) {
    /* display: none; */
  }
`;
