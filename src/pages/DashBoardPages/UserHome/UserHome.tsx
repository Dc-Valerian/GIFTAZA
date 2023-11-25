import styled from "styled-components";
import ViewCards from "./ViewCards";
import UserDashBoardHead from "../../../Layout/DashBoardLayour/UserDashboard/UserDashboard";

const UserHome = () => {
  return (
    <Container>
      <UserDashBoardHead />

      <ViewCards />
    </Container>
  );
};

export default UserHome;

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  /* overflow-y: scroll; */
  margin-top: 130px;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #706e70;
    border-radius: 20px;
  }
`;
