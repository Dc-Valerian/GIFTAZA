import styled from "styled-components";
import pic from "../Assets/abPhone.webp";
import create from "../Assets/create-icon.svg";
import trade from "../Assets/begin-icon.svg";
import wait from "../Assets/wait-icon.svg";
import withdraw from "../Assets/withdraw-icon.svg";
import AboutCard from "./Props/Props.About";

const AppWorks = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <div>
              <H>Wondering How the App Works?</H>
              <P>Buy your cards in few easy steps</P>
              <Picture src={pic} />
            </div>
          </Head>
          <Cards>
            <AboutCard
              logo={create}
              heading="Create Account"
              par="Create an account with your valid details and add your bank account / mobile money."
            />
            <AboutCard
              logo={trade}
              heading="Choose a Gift Card"
              par="A business card allows you shop in a particular marketplace."
            />{" "}
            <AboutCard
              logo={wait}
              heading="Buy a Gift Card"
              par="Make payment to purchase a Gift Card through KoraPay's secure payment platform."
            />{" "}
            <AboutCard
              logo={withdraw}
              heading="Use the Gift Card"
              par="You can excercise a gift card's value on purchasing products across our registered businesses without cash or money transfer"
            />{" "}
            {/* <AboutCard
              logo={pic}
              heading="Transfer your Gift Card"
              par="You could either sell your gift card to any of our registered users, or gift it to someone."
            /> */}
            <Picture2 src={pic} />
          </Cards>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AppWorks;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  margin-top: 120px;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 60px;
  }
`;
const H = styled.div`
  font-size: 31px;
  font-weight: bold;
  color: #333333;
  text-transform: capitalize;
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;
const P = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
const Head = styled.div`
  color: #383838;
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  display: none;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
const Picture2 = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    width: calc(75% - 40px);
  }
`;
