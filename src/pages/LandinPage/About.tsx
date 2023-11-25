import styled from "styled-components";
import about from "../../Assets/about-img.webp";

const About = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <h2>About Mavericks</h2>
            <h1>You probably want to know about us right?</h1>
            <p>
              MAVERICKS is a registered gift card purchasing company established
              in 2023 dedicated to providing world-class purchasing experience
              to people in Nigeria and Ghana. Integrity, dedication and
              excellence in value have been the pillars to which our company
              hinges its practices and policies on.
            </p>
          </Left>
          <Right>
            <img src={about} alt="" />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default About;

const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 70vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }

  h2 {
    color: #ef9837;
    font-weight: 500;
    font-size: 2.1rem;
    margin: 0;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
      width: 90%;
      margin-left: 20px;
      margin-bottom: 1.5rem;
    }
  }

  h1 {
    font-size: 2.8rem;
    width: 70%;
    margin: 0;
    margin-bottom: 1rem;
    line-height: 3.5rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      line-height: 2.3rem;
      width: 90%;
      margin-left: 20px;
      margin-bottom: 0.4rem;
    }
  }

  p {
    width: 85%;
    font-size: 1.3rem;
    line-height: 160.6%;
    margin-bottom: 2rem;
    opacity: 0.8;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7rem;
      width: 90%;
      margin-left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: #ffffff;
  color: #333333;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
  margin-top: 110px;
  margin-bottom: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
