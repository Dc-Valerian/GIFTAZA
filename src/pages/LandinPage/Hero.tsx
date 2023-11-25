import styled from "styled-components";
import hero from "../../Assets/hero.webp";
import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <TextHold>
              <Title>
                GiftAza: Simplifying Personalized Gift-Giving with Digital Cards
              </Title>
              <p>
                Discover top-brand gift cards, send personalized messages, and
                manage your gifting easily with GiftAza. Effortless, practical,
                and joyful.!!
              </p>
              <NavLink to="/get-started" style={{ textDecoration: "none" }}>
                <button>
                  Use the Web App <TfiWorld />
                </button>
              </NavLink>
            </TextHold>
          </Left>
          <Right>
            <img src={hero} alt="" />

           
       
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const TextHold = styled.div`
  margin-left: 40px;

  p {
    margin-top: 30px;
    width: 90%;
    font-size: 1.3rem;
    line-height: 139.6%;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 1.05rem;
    }
  }

  button {
    padding: 15px 35px;
    background-color: #9342f6;
    display: flex;
    gap: 10px;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    border: 0;
    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
      background-color: #8725fe;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;


// const Hundred = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   position: absolute;
// `;

const Title = styled.h1`
  width: 90%;
  font-weight: 700;
  margin: 0;
  margin-top: 30px;
  font-size: 3rem;
  line-height: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    width: 89%;
    margin-top: 20px;
    line-height: 2rem;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: slide-in 1s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    height: 55vh;
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  animation: slide-in-bottom 1s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    height: 65vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  background-color: #f9f9f9;
  color: #333333;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 4rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 2rem;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  margin-top: 110px;
  margin-bottom: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;
