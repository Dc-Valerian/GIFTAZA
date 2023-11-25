import { useState } from "react";
import styled from "styled-components";
import { TbCurrencyNaira, TbEdit, TbGitBranchDeleted } from "react-icons/tb";
import { FaStreetView } from "react-icons/fa6";
import { RiUserStarFill } from "react-icons/ri";
import { HiMiniBanknotes } from "react-icons/hi2";
import { VscGitPullRequestCreate, VscFeedback } from "react-icons/vsc";
import {
  MdOutlineAppRegistration,
  MdOutlineViewInAr,
  MdSavings,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BiLogIn, BiSolidPieChart } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { BiPlus, BiMinus, BiSolidAnalyse } from "react-icons/bi";

const ToggleUserSideBar = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const [branches, setBranches] = useState<boolean>(false);
  const [staffs, setStaffs] = useState<boolean>(false);

  const logoutNav = useNavigate();
  const backToHome = () => {
    logoutNav("/");
  };

  return (
    <Container>
      <Wrapper >
        <Top>
         <Wel>Welcome Back,</Wel>
           <Text>Valerian Pedro</Text>
        </Top>

        <NavHolder >
          <NavLink style={{ textDecoration: "none" }} to={"/admin-dashboard"}>
            <Nav >
              <Icon>
                <BiSolidPieChart />
              </Icon>
             <NavName>Home</NavName>
            </Nav>
          </NavLink>

          <div onClick={() => setStaffs(!staffs)}>
            <Nav >
              <Icon>
                <MdOutlineViewInAr />
              </Icon>
             <NavName>Staffs</NavName>

                <PlusMinus>{staffs ? <BiMinus /> : <BiPlus />}</PlusMinus>

            </Nav>
          </div>
          {staffs ? (
            <div
              style={{
                color: "white",
                marginLeft: "10px",
                fontSize: "15px",
              }}
            >
              <NavLink
                to={"/admin-dashboard/staff/create"}
                style={{ textDecoration: "none" }}
              >
                <Nav >
                  <NestedIcon>
                    <VscGitPullRequestCreate />
                  </NestedIcon>
                 <NestedNavName>Create Staff</NestedNavName>
                </Nav>
              </NavLink>
              <NavLink
                to={"/admin-dashboard/staff"}
                style={{ textDecoration: "none" }}
              >
                <Nav >
                  <NestedIcon>
                    <FaStreetView />
                  </NestedIcon>
                   <NestedNavName>View Staff</NestedNavName>
                </Nav>
              </NavLink>
              <NavLink
                to={"/admin-dashboard/staff/edit"}
                style={{ textDecoration: "none" }}
              >
                <Nav >
                  <NestedIcon>
                    <TbEdit />
                  </NestedIcon>
                  <NestedNavName>About Staff</NestedNavName>
                </Nav>
              </NavLink>
            </div>
          ) : null}

          <NavLink
            style={{ textDecoration: "none" }}
            to={"/admin-dashboard/user"}
          >
            <Nav>
              <Icon>
                <RiUserStarFill />
              </Icon>
             <NavName>Users</NavName>
            </Nav>
          </NavLink>
          <div onClick={() => setBranches(!branches)}>
            <Nav >
              <Icon>
                <BiSolidAnalyse />
              </Icon>
             <NavName> Branches</NavName>

                <PlusMinus>{branches ? <BiMinus /> : <BiPlus />}</PlusMinus>

            </Nav>
          </div>
          {branches ? (
            <div
              style={{
                color: "white",
                marginLeft: "10px",
                fontSize: "15px",
              }}
            >
              <NavLink
                style={{ textDecoration: "none" }}
                to={"/admin-dashboard/branch/view"}
              >
                <Nav >
                  <NestedIcon>
                    <TbGitBranchDeleted />
                  </NestedIcon>
                 <NestedNavName>View Branches</NestedNavName>
                </Nav>
              </NavLink>
            </div>
          ) : null}

          <NavLink
            style={{ textDecoration: "none" }}
            to={"/admin-dashboard/loans"}
          >
            <Nav>
              <Icon>
                <TbCurrencyNaira />
              </Icon>
             <NavName> Loans</NavName>
            </Nav>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none" }}
            to={"/admin-dashboard/user-registered"}
          >
            <Nav >
              <Icon>
                <MdOutlineAppRegistration />
              </Icon>
            <NavName> Registration</NavName>
            </Nav>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none" }}
            to={"/admin-dashboard/investment"}
          >
            <Nav >
              <Icon>
                <HiMiniBanknotes />
              </Icon>
              <NavName>Investment</NavName>
            </Nav>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none" }}
            to={"/admin-dashboard/savings"}
          >
            <Nav >
              <Icon>
                <MdSavings />
              </Icon>
               <NavName>Savings</NavName>
            </Nav>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none" }}
            to={"/admin-dashboard/feedbacks"}
          >
            <Nav >
              <Icon>
                <VscFeedback />
              </Icon>
              <NavName>FeedBacks</NavName>
            </Nav>
          </NavLink>
          <Nav
            onClick={backToHome}

            style={{ marginTop: "30px" }}
          >
            <Icon>
              <BiLogIn />
            </Icon>
            <NavName>Log Out </NavName>
          </Nav>
        </NavHolder>
      </Wrapper>
    </Container>
  );
};

export default ToggleUserSideBar;

const PlusMinus = styled.div`
  margin-top: 7px;
  font-size: 25px;
  color: white;
  margin-right: 10px;
  position: absolute;
  right: 1px;
`;

const NestedNavName = styled.div`
  font-size: 17px;
  color: #b9b9b9;
`;

const NestedIcon = styled.div`
  margin-top: 7px;
  font-size: 25px;
  color: #b9b9b9;
  margin-right: 10px;
`;

const NavName = styled.div`
  font-size: 17px;
  color: #fff;
`;

const Icon = styled.div`
  margin-top: 7px;
  font-size: 25px;
  color: white;
  margin-right: 10px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 360ms;
  padding: 5px 2px 5px 5px;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  /* width: 160px; */
  width: 160px;
  &:hover {
    background-color: #2e0425a0;
    border-radius: 10px;
  }
`;

const NavHolder = styled.div`
  /* background-color: red; */
  height: 90%;
  width:90%;
  margin-top: 15px;
  transition: all 360ms;
`;

const Text = styled.div`
  margin-top: 5px;
  font-size: 20px;
`;
const Wel = styled.div`
  font-size: 15px;
`;
const Top = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  background-color: #1c232d;
  width: 100%;
  z-index: 99999;
  height: 140px;
`;

const Image = styled.div`
  background-color: blanchedalmond;
  height: 70px;
  width:90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  /* background-color: red; */
  width: 180px;
  /* height: 98vh; */
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 200px;
  background-color: #1c232d;
  color: white;
  transition: all 360ms;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  justify-content: center;
  padding-right: 4px;
  /* padding-bottom: 10px;/ */
  overflow-x: scroll;
  @media screen and (min-width: 769px) {
    display: none;
  }
  z-index:1;
`;