import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";

import { TbArrowsLeftRight } from "react-icons/tb";

import { useAppSelector } from "../Global/Store";
import UserHome from "../pages/DashBoardPages/UserHome/UserHome";
import UserProfile from "../pages/DashBoardPages/UserProfile";

const UserRoutes = () => {
  const [showing, setShowing] = React.useState(false);
  const user = useAppSelector((state) => state.userData);

  let element = useRoutes([
    {
      path: "/user-dashboard",
      element: <UserHome />,
    },
    {
      path: "/user-dashboard/profile",
      element: <UserProfile />,
    },
    {
      path: "/user-dashboard/mycards",
      element: <UserCards />,
    },
    {
      path: "/user-dashboard/notify",
      element: <UserNotify />,
    },
    {
      path: "/user-dashboard/card/:id",
      element: <DetailCard />,
    },
  ]);
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <WrapHead>
        {/* {user?.status === "User" ? <SideNav /> : null} */}
        <SideNav />
      </WrapHead>
      <Wrapper>{element}</Wrapper>
      <Shower
        onClick={() => {
          setShowing(!showing);
        }}
      >
        <TbArrowsLeftRight />
      </Shower>
      {showing ? <MobileNavs /> : null}
    </div>
  );
};

export default UserRoutes;
const WrapHead = styled.div`
  width: 250px;
  height: 100vh;
  display: block;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    width: 60px;
    height: 100vh;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;
  display: flex;
  overflow: hidden;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    width: calc(100% - 60px);
    height: 100vh;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
const Shower = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: 200;
  color: purple;
  background-color: white;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
