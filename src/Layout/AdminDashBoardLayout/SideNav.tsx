import React from "react";
import styled from "styled-components";
import { HiHome, HiBell } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UseAppDispatch } from "../../GlobalStore/Store";
import { logout as LogOut } from "../../GlobalStore/ReduxState";
import NavBars from "./NavBars";

const SideNav = () => {
  const [home, setHome] = React.useState(true);
  const [trans, setTrans] = React.useState(true);
  const [wallet, setWallet] = React.useState(true);
  const [notify, setNotify] = React.useState(true);
  const [support, setSupport] = React.useState(true);
  const [account, setAccount] = React.useState(true);
  const [logout, setLogout] = React.useState(true);

  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  return (
    <div>
     <Container>
        <Logo>GIFTAZA</Logo>
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/business-dashboard");
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/business-dashboard/giftcard");
            }}
          >
            <NavBars
              pic={<MdInsertChart />}
              routeName="Gift Cards"
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/business-dashboard/all-users");
            }}
          >
            <NavBars
              pic={<FaWallet />}
              routeName="Users"
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/notify");
            }}
          >
            <NavBars
              pic={<HiBell />}
              routeName="Notification"
              cl={notify ? "#d1abf5" : "white"}
              bd={notify ? "" : "4px solid white"}
              hov={notify ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(false);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/support");
            }}
          >
            <NavBars
              pic={<AiFillMessage />}
              routeName="Support"
              cl={support ? "#d1abf5" : "white"}
              bd={support ? "" : "4px solid white"}
              hov={support ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(false);
              setLogout(true);
              navigate("/dashboard/account");
            }}
          >
            <NavBars
              pic={<BsPersonFill />}
              routeName="Account"
              cl={account ? "#d1abf5" : "white"}
              bd={account ? "" : "4px solid white"}
              hov={account ? " #4c2be2" : ""}
            />
          </div>
        </Bars>
        <div
          onClick={() => {
            setHome(true);
            setTrans(true);
            setWallet(true);
            setNotify(true);
            setSupport(true);
            setAccount(true);
            setLogout(false);
            dispatch(LogOut());
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
  width: 250px;
  height: 100%;
  background-color: blueviolet;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  position: fixed; /* Fix the SideNav position */
  top: 0; /* Place it at the top */
  left: 0; /* Place it at the left */
  bottom: 0; /* Extend it to the bottom */
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
  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    gap: 25px;
  }
  margin: 0;
  padding: 0;
`;
