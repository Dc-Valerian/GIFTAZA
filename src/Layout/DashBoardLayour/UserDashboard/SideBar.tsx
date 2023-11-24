import styled from "styled-components";
import { useSelector } from "react-redux";
import { BiLogIn, BiSolidPieChart } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

const UserSideBar = () => {
  const toggle = useSelector((state: any) => state.toggle);

  const logoutNav = useNavigate();
  const backToHome = () => {
    logoutNav("/");
  };

  return (
    <Container w={toggle ? "k" : ""}>
      <Wrapper w={toggle ? "k" : ""}>
        <Top>
          <Image w={toggle ? "k" : ""}>
            <Pic
              src={
                "https://cdn.dribbble.com/users/6938226/avatars/small/73d8d6b0c59e6036ed9803730edc9ac7.png?1659668380"
              }
              alt="Profile Image"
            />
          </Image>

          {toggle && <Wel>Welcome Back,</Wel>}
          {toggle && <Text>Valerian Pedro</Text>}
        </Top>

        <NavHolder w={toggle ? "k" : ""}>
          <Topper>
            <NavLink style={{ textDecoration: "none" }} to={"/user-dashboard"}>
              <Nav w={toggle ? "k" : ""}>
                <Icon>
                  <BiSolidPieChart />
                </Icon>
                {toggle && <NavName>Home</NavName>}
              </Nav>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/user-dashboard/profile"}>
              <Nav w={toggle ? "k" : ""}>
                <Icon>
                  <BiSolidPieChart />
                </Icon>
                {toggle && <NavName>Profile</NavName>}
              </Nav>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/admin-dashboard"}>
              <Nav w={toggle ? "k" : ""}>
                <Icon>
                  <BiSolidPieChart />
                </Icon>
                {toggle && <NavName>Home</NavName>}
              </Nav>
            </NavLink>
          </Topper>

          <Dropper>
            <Nav
              onClick={backToHome}
              w={toggle ? "k" : ""}
              style={{ marginTop: "30px" }}>
              <Icon>
                <BiLogIn />
              </Icon>
              {toggle && <NavName>Log Out </NavName>}
            </Nav>
          </Dropper>
        </NavHolder>
      </Wrapper>
    </Container>
  );
};

export default UserSideBar;
const Topper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Dropper = styled.div``;

const Pic = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
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

const Nav = styled.div<{ w: string }>`
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
  width: ${({ w }) => (w ? "160px" : "40px")};
  &:hover {
    background-color: #2e0425a0;
    border-radius: 10px;
  }
`;

const NavHolder = styled.div<{ w: string }>`
  /* background-color: red; */
  height: 50%;
  width: ${({ w }) => (w ? "90%" : "50px")};
  margin-top: 15px;
  transition: all 360ms;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  background-color: #8246f3;
  width: 100%;
  z-index: 99999;
  height: 140px;
`;

const Image = styled.div<{ w: string }>`
  /* background-color: blanchedalmond; */
  height: 70px;
  width: ${({ w }) => (w ? "70px" : "70px")};
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Wrapper = styled.div<{ w: string }>`
  /* background-color: red; */
  width: ${({ w }) => (w ? "180px" : "70px")};
  /* height: 98vh; */
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div<{ w: string }>`
  width: ${({ w }) => (w ? "200px" : "80px")};
  background-color: #8246f3;
  color: white;
  transition: all 360ms;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  z-index: 1;

  top: 0;
  justify-content: center;
  padding-right: 4px;
  /* padding-bottom: 10px;/ */
  overflow-x: scroll;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;