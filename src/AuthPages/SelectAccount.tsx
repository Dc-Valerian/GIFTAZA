import styled from "styled-components";
import rstar from "../Assets/stars.svg";
import lstar from "../Assets/stars.svg";
import phone from "../Assets/phone.png";
import flower from "../Assets/flower.svg";
import business from "../Assets/business.png";
import user from "../Assets/user.png";
import { NavLink } from "react-router-dom";

const SelectAccount = () => {
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
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h4>GIFTAZA</h4>
          </NavLink>

          <h1>
            Please Select <br /> Account Type
          </h1>
          <p>Please select an account type to get started 🙂...</p>
          <Img src={phone} alt="" />
          <img
            src={flower}
            alt=""
            style={{ position: "absolute", bottom: "1%", left: "1px" }}
          />
        </Left>
        <Right>
          <NavLink to="/business-register" style={{ textDecoration: "none" }}>
            <Card color="#8246f3">
              <Text>
                <h1>Login as a Business</h1>
                <p>make giftcards people can shop with for your business</p>
              </Text>
              <Image>
                <img src={business} alt="" />
              </Image>
            </Card>
          </NavLink>

          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <Card color="#EF9837">
              <Text>
                <h1>Login as a User</h1>
                <p>
                  Purchase giftcards from any business and shop at your
                  favourite store
                </p>
              </Text>
              <Image>
                <img src={user} alt="" />
              </Image>
            </Card>
          </NavLink>

          <Footer>
            <p>© {new Date().getFullYear()} GIFTAZA</p>
          </Footer>
        </Right>
      </Container>
    </div>
  );
};

export default SelectAccount;

const Footer = styled.div`
  width: 650px;
  margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-size: 14px;
    opacity: 0.7;
  }

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;

const Text = styled.div`
  width: 70%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: 14px;
    width: 65%;
    font-weight: 300;
  }
`;

const Image = styled.div`
  width: 30%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const Card = styled.div<{ color: string }>`
  width: 600px;
  height: 13vh;
  background-color: ${({ color }) => color};
  margin-left: 70px;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: all 350ms ease 0s;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    width: 80%;
  }

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;

const Right = styled.div`
  gap: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  :hover {
    animation: bounce 0.5s;
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

  @media screen and (max-width: 960px) {
    position: static;
    height: 210px;
    margin-top: 60px;
    margin-left: 120px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
    height: 85vh;
  }
  h4 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 30px;

    @media screen and (max-width: 960px) {
      font-size: 1.5rem;
    }
  }

  h1 {
    color: white;
    font-size: 44px;
    text-align: center;
    margin-top: 50px;
    animation: typing 4s steps(20);
    white-space: nowrap;
    line-height: 3rem;
    overflow: hidden;

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
  }
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
