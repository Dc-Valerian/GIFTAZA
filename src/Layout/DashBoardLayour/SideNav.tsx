import React from "react";
import styled from "styled-components";
import { HiHome, HiBell } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import NavBars from "./NavBars";

const SideNav = () => {
  const [home, setHome] = React.useState(true);

  const [trans, setTrans] = React.useState(true);
  const [wallet, setWallet] = React.useState(true);
  const [notify, setNotify] = React.useState(true);
  const [logout, setLogout] = React.useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Logo>MaAVERICKS</Logo>
        <br />
        <br />
        <br />
        <Bars>
          <div
            onClick={() => {
              setHome(false);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setLogout(true);

              navigate("/user-dashboard");
            }}
          >
            <NavBars
              pic={<HiHome />}
              routeName="Home"
              cl={home ? "#d1abf5" : "white"}
              bd={home ? "" : "4px solid white"}
              hov={home ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(false);
              setWallet(true);
              setNotify(true);
              setLogout(true);

              navigate("/user-dashboard/profile");
            }}
          >
            <NavBars
              pic={<MdInsertChart />}
              routeName="My Profile"
              cl={trans ? "#d1abf5" : "white"}
              bd={trans ? "" : "4px solid white"}
              hov={trans ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(false);
              setNotify(true);
              setLogout(true);
              navigate("/user-dashboard/mycards");
            }}
          >
            <NavBars
              pic={<FaWallet />}
              routeName="My Gift Cards"
              cl={wallet ? "#d1abf5" : "white"}
              bd={wallet ? "" : "4px solid white"}
              hov={wallet ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(false);

              setLogout(true);
              navigate("/user-dashboard/notify");
            }}
          >
            <NavBars
              pic={<HiBell />}
              routeName="Notifications"
              cl={notify ? "#d1abf5" : "white"}
              bd={notify ? "" : "4px solid white"}
              hov={notify ? " #4c2be2" : ""}
            />
          </div>
        </Bars>

        <div
          onClick={(e) => {
            e.preventDefault();
            setHome(true);
            setTrans(true);
            setWallet(true);
            setNotify(true);
            setLogout(false);
            navigate("/");
          }}
        >
          <NavBars
            pic={<CiLogout />}
            routeName="Log Out"
            cl={logout ? "#d1abf5" : "white"}
            bd={logout ? "" : "4px solid white"}
            hov={logout ? " #4c2be2" : ""}
          />
        </div>
      </Container>
    </div>
  );
};

export default SideNav;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
  padding-top: 10px;
  display: flex;
  display: flex;
  flex-direction: column;
  position: relative;
  /* transition: all 350ms; */
`;
const Logo = styled.div`
  color: white;
  padding-left: 30px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
const Bars = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    gap: 25px;
  }
  margin: 0;
  padding: 0;
`;
const Image = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin: 5px;
  width: calc(100% - 10px);
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: #372be2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 160px;
    height: 120px;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    font-weight: 400;
  }
`;
const Small = styled.div`
  font-size: 11px;
  margin-bottom: 20px;
`;
const Big = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 60px;
  height: 30px;
  /* font-size: 12px; */
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 11px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 350ms;
  :hover {
    background-color: #940294;
  }
`;
const Shower = styled.div`
  position: absolute;
  right: -15px;
  top: 2px;
  padding: 10px;
  display: flex;
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
const Stars = styled.div`
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
