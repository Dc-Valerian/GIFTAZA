import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiHome, HiBell } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { logout as LogOut } from "../../GlobalStore/ReduxState";
import { UseAppDispatch } from "../../GlobalStore/Store";
import MobileBars from "./MobileBars";

const BusinessMobileNavs = () => {
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
        <Wrapper>
          <Nav
            onClick={() => {
              setHome(false);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard");
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/giftcard");
            }}
          >
            <MobileBars
              pic={<MdInsertChart />}
              routeName="Gift Cards"
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/wallet");
            }}
          >
            <MobileBars
              pic={<FaWallet />}
              routeName="Wallet"
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
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/notify");
            }}
          >
            <MobileBars
              pic={<HiBell />}
              routeName="Notification"
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
              setSupport(false);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/support");
            }}
          >
            <MobileBars
              pic={<AiFillMessage />}
              routeName="Support"
              cl={support ? "#d1abf5" : "white"}
              bd={support ? "" : "#6c25bd"}
              hov={support ? " #4c2be2" : ""}
            />
          </Nav>
          <Nav
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
            <MobileBars
              pic={<BsPersonFill />}
              routeName="Account"
              cl={account ? "#d1abf5" : "white"}
              bd={account ? "" : "#6c25bd"}
              hov={account ? " #4c2be2" : ""}
            />
          </Nav>
          <Nav
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

export default BusinessMobileNavs;

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
