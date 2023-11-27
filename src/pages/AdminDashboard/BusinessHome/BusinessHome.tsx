import { useState } from "react";
import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import card from "../../../Assets/card.svg";
import spiral from "../../../Assets/robo.svg";
import { NavLink } from "react-router-dom";

const BusinessHome = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Head>
        <InHead>
          <Message>
            Welcome,
            <span> Valerian</span>
          </Message>
          <SeeBalance>
            <BalanceDetails>
              <Viewer>
                <div style={{ marginBottom: "5px" }}>Available balance</div>
                <div style={{cursor:"pointer"}}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? (
                    <AiFillEye style={{ marginTop: "5px", fontSize: "30px" }} />
                  ) : (
                    <AiFillEyeInvisible
                      style={{ marginTop: "5px", fontSize: "30px" }}
                    />
                  )}
                </div>
              </Viewer>
              {show ? <Info> ₦200.00</Info> : <Info>*******</Info>}
            </BalanceDetails>
            <WithdrawButton>Withdraw</WithdrawButton>
          </SeeBalance>
        </InHead>
      </Head>
      <Body>
        <InBody>
          <QuickActions>
            <h1>Quick Actions</h1>
            <QuickContain>
              <QuickWrap>
                <QuickImage>
                  <img src={card} />
                </QuickImage>
                <QuickComponent>
                  <div>
                    <HText>Sell Gift Cards</HText>
                    <LText style={{ fontSize: "20px" }}>
                      Create and sell Gift Cards for your business
                    </LText>
                  </div>
                  <NavLink
                    to="/business-dashboard/giftcard"
                    style={{ textDecoration: "none" }}
                  >
                    <Button>Sell Gift Card</Button>
                  </NavLink>
                </QuickComponent>
              </QuickWrap>
            </QuickContain>
          </QuickActions>
          <Cards>
            <CardComponent>
              <CardImage>
                <img src={spiral} />
              </CardImage>
              <div>
                <HText1>See all User with Gift Card Wallet</HText1>
                <LText1 style={{ fontSize: "12px" }}>
                  See all registered users with gift cards
                </LText1>
              </div>
              <NavLink
                to="/business-dashboard/all-users"
                style={{ textDecoration: "none" }}
              >
                <CardButton>See Users</CardButton>
              </NavLink>
            </CardComponent>
          </Cards>
          <Pending>
            <div style={{ marginBottom: "10px" }}>Pending</div>
            <PendingActions>
              <div style={{ fontSize: "13px", fontWeight: "600" }}>
                Set transaction pin
              </div>
              <PendSign>PENDING</PendSign>
            </PendingActions>
            <PendingActions>
              <div style={{ fontSize: "13px", fontWeight: "600" }}>
                Add default bank
              </div>
              <PendSign>PENDING</PendSign>
            </PendingActions>
          </Pending>
        </InBody>
      </Body>
    </Container>
  );
};

export default BusinessHome;

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  color: #3d3d3d;
  gap: 30px;
`;
const Head = styled.div`
  width: 100%;
  max-height: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const InHead = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 799px) {
    gap: 15px;
  }
`;
const Message = styled.div`
  font-size: 18px;
  span {
    font-weight: 600;
  }

  @media screen and (max-width: 799px) {
    /* margin-top: 10px; */
  }
`;
const SeeBalance = styled.div`
  color: blue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Viewer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 17px;
  color: #8A2BE2;

`;
const Info = styled.div`
  font-size: 20px;
  color: #8A2BE2;

`;
const BalanceDetails = styled.div``;
const WithdrawButton = styled.button`
  border-radius: 10px;
  width: 250px;
  color: white;
  background-color: #a35ef7;
  padding: 15px 60px;
  border: none;
  outline: none;
  font-size: 17px;
  margin-top: 30px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #913cf9;
  }
`;
const Body = styled.div`
  width: 100%;
  color: #3d3d3d;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const QuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const QuickContain = styled.div`
  width: calc(100% - 15px);

  background-color: blueviolet;
  border-radius: 20px;
  /* position: relative; */
`;
const QuickWrap = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
`;
const QuickComponent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 799px) {
    width: 60%;
    /* background-color: #2c4a72; */
    position: relative;
    top: 50px;
    left: 30px;
  }
`;
const QuickImage = styled.div`
  width: 100%;
  position: relative;
  bottom: -6px;
  /* left: 30px; */
  @media screen and (min-width: 800px) {
    width: 50%;
  }
  img {
    width: 100%;
  }
`;
const Button = styled.button`
  max-width: 200px;
  border-radius: 5px;
  color: #a35ef7;
  background-color: white;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 17px;
  padding: 10px 20px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    background-color: #913cf9;
    color: white;
  }
`;
const HText = styled.div`
  font-size: 19px;
  @media screen and (min-width: 800px) {
    font-size: 3.5rem;
    font-weight: 700;
  }

  @media screen and (max-width: 799px) {
    font-size: 30px;
  }
`;
const LText = styled.div`
  font-size: 12px;
  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardComponent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: #ffcee1ae;
  @media screen and (min-width: 670px) {
    width: calc(45% - 20px);
  }
`;
const CardButton = styled.button`
  max-width: 200px;
  border-radius: 5px;
  color: white;
  background-color: orange;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 15px 20px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    background-color: #913cf9;
  }
`;
const HText1 = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: orange;
  width: 350px;
  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText1 = styled.div`
  font-size: 12px;
  color: #3d3d3d;

  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
const CardImage = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

const Pending = styled.div``;
const PendingActions = styled.div`
  width: calc(100% - 20px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #ececec;
  margin-bottom: 10px;
`;
const PendSign = styled.div`
  padding: 1px 7px;
  border-radius: 2px;
  color: white;
  font-weight: 600;
  background-color: orange;
  font-size: 14px;
`;
