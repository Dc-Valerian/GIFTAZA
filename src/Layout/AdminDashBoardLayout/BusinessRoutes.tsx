import React from "react";
import styled from "styled-components";
import { TbArrowsLeftRight } from "react-icons/tb";
import BusinessMobileNavs from "./BusinessMobileNavs";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const BusinessRoutes = () => {
  const [showing, setShowing] = React.useState(false);

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <WrapHead>
        {/* <SideNav /> */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio
        eius ipsum optio omnis amet repellat aut alias! Itaque, ad.
        {/* {user?.status === "Business" ? <SideNav /> : null} */}
      </WrapHead>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Shower
        onClick={() => {
          setShowing(!showing);
        }}
      >
        <TbArrowsLeftRight />
      </Shower>
      {showing ? <BusinessMobileNavs /> : null}
    </div>
  );
};

export default BusinessRoutes;
const WrapHead = styled.div`
  width: 250px;
  height: 100vh;
  display: block;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    width: 300px;
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
  /* overflow: hidden; */
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
