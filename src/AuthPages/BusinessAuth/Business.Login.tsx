import styled from "styled-components";
import rstar from "../../Assets/stars.svg";
import lstar from "../../Assets/stars.svg";
import phone from "../../Assets/phone.png";
import flower from "../../Assets/flower.svg";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbSquareKey } from "react-icons/tb";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

const BizzLogin = () => {
  return (
    <div>
      <Container>
        <Left>
          <img
            src={rstar}
            alt=""
            style={{ position: "absolute", left: "75%", top: "20%" }}
          />
          <img
            src={lstar}
            alt=""
            style={{
              position: "absolute",
              top: "20%",
              left: "35px",
              height: "360px",
            }}
          />
          <h4>GIFTAZA</h4>
          <H1>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .typeString("Glad to have..")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()

                  .typeString("You back")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </H1>
          <p>
            Glad to have you back We are glad to have you back ☺️, Let’s get you
            trading
          </p>
          <Img src={phone} alt="" />
          <img
            src={flower}
            alt=""
            style={{ position: "absolute", bottom: "1%", left: "1px" }}
          />
        </Left>
        <Right>
          <h2>Log in</h2>
          <Inputs>
            <MdOutlinePersonOutline
              style={{
                marginLeft: "15px",
                fontSize: "25px",
              }}
            />
            <input placeholder="Enter email or username" />
          </Inputs>
          <Inputs>
            <TbSquareKey
              style={{
                marginLeft: "15px",
                fontSize: "25px",
              }}
            />
            <input placeholder="Password" />
          </Inputs>
          <Div
            style={{
              display: "flex",
              marginLeft: "60px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              style={{ width: "15px", height: "15px", background: "#f9f4ff" }}
            />
            <p
              style={{
                margin: "0",
                marginLeft: "10px",
                fontSize: "15px",
              }}
            >
              Always remember me
            </p>
          </Div>
          <NavLink to="/user-dashboard">
            <Button>Log in</Button>
          </NavLink>
          <P>
            Don't an account.??{" "}
            <NavLink to="/business-register" style={{ textDecoration: "none" }}>
              <span style={{ color: "blue", textDecoration: "none" }}>
               Register 
              </span>
            </NavLink>
          </P>
        </Right>
      </Container>
    </div>
  );
};

export default BizzLogin;

const Button = styled.button`
  width: 170px;
  height: 48px;
  margin-left: 60px;
  border: 0;
  background-color: #8246f3;
  color: white;
  border-radius: 10px;
  margin-top: 31px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-top: 20px;
    width: 80%;
  }
`;

const P = styled.p`
  margin: 0;
  margin-left: 60px;
  font-size: 15px;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    margin: 0;
    font-size: 15px;
    margin-top: 10px;
    width: 80%;
  }
`;

const Div = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: 20px;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin: 0;
    font-size: 10px;
    width: 80%;
  }
`;

const Inputs = styled.div`
  background-color: #f9f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 430px;
  height: 55px;
  margin-bottom: 20px;
  margin-left: 60px;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 80%;
    margin-bottom: 20px;
  }

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 7px;

    ::placeholder {
      color: silver;
      font-size: 15px;
    }
  }
`;

const Right = styled.div`
  h2 {
    margin-top: 60px;
    margin-left: 60px;
    font-size: 36px;
    margin-bottom: 60px;

    @media screen and (max-width: 960px) {
      margin: 0;
      margin-top: 10px;
      font-size: 25px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const H1 = styled.h1`
  color: white;
  font-size: 44px;
  text-align: center;
  margin-top: 50px;
  animation: typing 4s steps(20);
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid black; */

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Img = styled.img`
  height: 230px;
  margin-top: 25px;
  transform: translate(-20%, -20%);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  left: 35%;
  bottom: 1px;
  animation: bounce 2s;
  animation-iteration-count: infinite;

  @media screen and (max-width: 960px) {
    position: static;
    height: 210px;
    margin-top: 60px;
    margin-left: 120px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translate(-20%, -20%) scale(1);
    }
    50% {
      transform: translate(-20%, -20%) scale(1.2);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
const Left = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #8246f3;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  h4 {
    color: white;
    font-size: 21px;
    font-family: Inria serif;
    font-weight: 600;
    margin-top: 30px;
  }

  // h1 {
  // //   color: white;
  // //   font-size: 44px;
  // //   text-align: center;
  // //   margin-top: 50px;

  // //   @media screen and (max-width: 960px) {
  // //     font-size: 30px;
  // //   }
  // }
  p {
    color: white;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    width: 65%;
    font-size: 23px;

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
  }
`;
