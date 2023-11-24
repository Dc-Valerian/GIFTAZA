import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiHome, HiBell } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import MobileBars from "./MobileBars";

const MobileNavs = () => {
  const [home, setHome] = React.useState(true);
  const [trans, setTrans] = React.useState(true);
  const [wallet, setWallet] = React.useState(true);
  const [notify, setNotify] = React.useState(true);

  const [logout, setLogout] = React.useState(true);

  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Wrapper>
          <Nav
            onClick={() => {
              setHome(false);
              setTrans(true);
              setWallet(true);
              setNotify(true);

              setLogout(true);
              navigate("/user-dashboard");
            }}
          >
            <MobileBars
              pic={<HiHome />}
              routeName="Home"
              cl={home ? "#d1abf5" : "white"}
              bd={home ? "" : "#6c25bd"}
              hov={home ? " #4c2be2" : ""}
            />
          </Nav>
          <Nav
            onClick={() => {
              setHome(true);
              setTrans(false);
              setWallet(true);
              setNotify(true);

              setLogout(true);
              navigate("/user-dashboard/profile");
            }}
          >
            <MobileBars
              pic={<MdInsertChart />}
              routeName="My Profile"
              cl={trans ? "#d1abf5" : "white"}
              bd={trans ? "" : "#6c25bd"}
              hov={trans ? " #4c2be2" : ""}
            />
          </Nav>
          <Nav
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(false);
              setNotify(true);

              setLogout(true);
              navigate("/user-dashboard/mycards");
            }}
          >
            <MobileBars
              pic={<FaWallet />}
              routeName="My Gift Cards"
              cl={wallet ? "#d1abf5" : "white"}
              bd={wallet ? "" : "#6c25bd"}
              hov={wallet ? " #4c2be2" : ""}
            />
          </Nav>
          <Nav
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(false);

              setLogout(true);
              navigate("/user-dashboard/notify");
            }}
          >
            <MobileBars
              pic={<HiBell />}
              routeName="Notifications"
              cl={notify ? "#d1abf5" : "white"}
              bd={notify ? "" : "#6c25bd"}
              hov={notify ? " #4c2be2" : ""}
            />
          </Nav>
          <Nav
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              navigate("/");
              setLogout(false);
            }}
          >
            <MobileBars
              pic={<CiLogout />}
              routeName="Log Out"
              cl={logout ? "#d1abf5" : "white"}
              bd={logout ? "" : "#6c25bd"}
              hov={logout ? " #4c2be2" : ""}
            />
          </Nav>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MobileNavs;

const Container = styled.div`
  height: 400px;
  width: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
  right: 40px;
  top: 60px;
  background-color: blueviolet;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
`;
const Nav = styled.div`
  width: 100%;
`;
