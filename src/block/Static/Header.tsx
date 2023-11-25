import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [toTopshow, settoTopShow] = React.useState(false);
  const [isActive, setIsActive] = React.useState(null);

  console.log(isActive);

  const changeHeaderColor = () => {
    if (window.scrollY >= 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const showBacktoTop = () => {
    if (window.scrollY >= 400) {
      settoTopShow(true);
    } else {
      settoTopShow(false);
    }
  };
  const backToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", showBacktoTop);
  window.addEventListener("scroll", changeHeaderColor);

  const toHero = () => {
    scroll.scrollToTop();
    
    // setIsActive("true");
  };
  const toAbout = (to: any) => {
    scroll.scrollTo(900);
    setIsActive(to);
  };
  const toFeatures = () => {
    scroll.scrollTo(1850);
  };
  const toSupport = () => {
    scroll.scrollTo(2950);
  };
  return (
    <div>
      {show ? (
        <Container boxShadow={show ? "value" : ""} fixed="jj">
          <Wrapper>
            <LogoNav>
              <Logo onClick={backToTop}>GiftAza</Logo>
              <Nav>
                <Navigation onClick={toHero}>Home</Navigation>
                <Navigation onClick={toAbout}>About</Navigation>
                <Navigation onClick={toFeatures}>How it works</Navigation>
                <Navigation onClick={toSupport}>Get started</Navigation>
              </Nav>
            </LogoNav>

            <ButtonHold>
              <NavLink to="/get-started" style={{ textDecoration: "none" }}>
                <Button2 color="#fff" bg="#9342F6" style={{}}>
                  Create an account
                </Button2>
              </NavLink>
            </ButtonHold>
          </Wrapper>
          {toTopshow ? (
            <BackToTop onClick={backToTop}>
              <AiOutlineArrowUp />
            </BackToTop>
          ) : null}
        </Container>
      ) : (
        <Container boxShadow={show ? "value" : ""} fixed="">
          <Wrapper>
            <LogoNav>
              <Logo onClick={backToTop}>GiftAza</Logo>
              <Nav>
                <Navigation onClick={toHero}>Home</Navigation>
                <Navigation onClick={toAbout}>About</Navigation>
                <Navigation onClick={toFeatures}>Features</Navigation>
                <Navigation onClick={toSupport}>Customer support</Navigation>
              </Nav>
            </LogoNav>

            <ButtonHold>
              <NavLink to="/get-started" style={{ textDecoration: "none" }}>
                <Button2 color="#fff" bg="#9342F6">
                  Create an account
                </Button2>
              </NavLink>
            </ButtonHold>
          </Wrapper>
          {toTopshow ? (
            <BackToTop onClick={backToTop}>
              <AiOutlineArrowUp />
            </BackToTop>
          ) : null}
        </Container>
      )}
    </div>
  );
};

export default Header;
// const pulseInit = keyframes`
//   0% {
//     transform: scale(1);
//     opacity: 0.5;
//   }
//   50% {
//     transform: scale(1.1);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 0.5;
//   }
// `;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
`;

const ButtonHold = styled.div`
  display: flex;
  align-items: center;
`;
const LogoNav = styled.div`
  display: flex;
  align-items: center;
`;

const BackToTop = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-size: 20px;
  transition: all 0.5s ease;

  :hover {
    cursor: pointer;
  }
`;

const Navigation = styled.p`
  margin: 0;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
    color: #5057fd;
  }
`;

const Button2 = styled.button<{ color: string; bg: string }>`
  padding: 10px 20px;
  height: 6vh;
  font-size: 16px;
  background-color: ${({ bg }) => bg};
  border: 0;
  color: ${({ color }) => color};
  border: 1px solid blue;
  border-radius: 5px;
  font-weight: 600;
  margin-left: 40px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    background-color: #852ef1;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  color: #333333;
`;

const Logo = styled.div`
  animation: ${pulse} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  color: #5352ec;
  font-size: 1.3rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div<{
  boxShadow: string;
  fixed: string;
}>`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  position: ${({ fixed }) => (fixed ? "fixed" : "")};
  top: 0;
  z-index: 10;
  transition: all 350ms ease;
  color: ${({ color }) => color};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? "rgba(99, 99, 99, 0.079) 0px 2px 8px 0px" : "none"};
  opacity: 0;
  animation: fade-in 450ms ease-out forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
