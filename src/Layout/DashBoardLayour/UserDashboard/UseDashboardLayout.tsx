import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import UserDashBoardHead from "./UserDashboard";
import UserSideBar from "./SideBar";
import ToggleUserSideBar from "./ToggleUserSideBar";
import {
  changeToggleFalse,
  changeToggleTrue,
} from "../../../GlobalStore/ReduxState";

const UserDashboardLayout = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const [mobile, setMobile] = useState(false);
  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <Container>
      <>
        {toggle ? (
          <Button
            positionLeftValue={toggle ? "k" : ""}
            tt={toggle ? "k" : ""}
            onClick={() => {
              dispatch(changeToggleFalse());
            }}
          />
        ) : (
          <Button
            tt={toggle ? "k" : ""}
            positionLeftValue={toggle ? "k" : ""}
            onClick={() => {
              dispatch(changeToggleTrue());
            }}
          />
        )}
      </>
      <UserSideBar />
      {!mobile ? null : <ToggleUserSideBar />}
      <Wrapper wd={toggle ? "value" : ""}>
        <Outlet />
      </Wrapper>
      <TabletMenu onClick={toggleMobile}>
        {!mobile ? <AiOutlineMenu /> : <AiOutlineClose />}
      </TabletMenu>
    </Container>
  );
};

export default UserDashboardLayout;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div<{ wd: string }>`
  width: calc(100% - ${({ wd }) => (wd ? "204" : "84")}px);
  transition: all 360ms;
  display: flex;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const Button = styled(BsFillArrowRightSquareFill)<{
  tt: string;
  positionLeftValue: string;
}>`
  position: fixed;
  color: #f15a22;
  font-size: 30px;
  top: 48px;
  left: ${({ positionLeftValue }) => (positionLeftValue ? "16" : "7")}%;
  cursor: pointer;
  /* background-color: white; */
  overflow: hidden;
  border-radius: 0;
  transform: ${({ tt }) => (tt ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 360ms;
  z-index: 9999;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const TabletMenu = styled.div`
  display: none;
  @media screen and (max-width: 769px) {
    display: block;
  }
  position: fixed;
  top: 23px;
  left: 25px;
  z-index: 999;
  font-size: 21px;
`;
