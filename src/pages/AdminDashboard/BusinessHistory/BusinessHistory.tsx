import { useState } from "react";
import styled from "styled-components";
// import ProfileComp from "../Home/ProfileComp";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import two from "../../../Assets/two.svg";

const BusinessHistory = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container>
        <Head>
          <InHead>
            <Message>Wallet</Message>
            <SeeBalance>
              <BalanceDetails>
                <Viewer>
                  <div style={{ marginBottom: "5px" }}>Available balance</div>
                  <div
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    {show ? (
                      <AiFillEye
                        style={{ marginTop: "5px", fontSize: "30px" }}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        style={{ marginTop: "5px", fontSize: "30px" }}
                      />
                    )}
                  </div>
                </Viewer>
                {show ? <Info>$20</Info> : <Info>*******</Info>}
              </BalanceDetails>
              <WithdrawButton>Withdraw</WithdrawButton>
            </SeeBalance>
          </InHead>
        </Head>

        <Body>
          <InBody>
            <CardComponent2>
              <CardImage2>
                <img src={two} />
              </CardImage2>
              <div>
                <HText2>Top Gift Cards</HText2>
                <LText2 style={{ fontSize: "12px" }}>
                  Trade gift cards for Fast Cash
                </LText2>
              </div>
              <CardButton2>Fund Wallet</CardButton2>
            </CardComponent2>

            <History>
              <p>Recent withdrawals</p>
              <HistoryHold>
                <Up>
                  <Inn>
                    <p>S/N</p>
                    <p>Logo</p>
                    <p>Company Name</p>
                    <p>Date and Time</p>
                    <p>Amount</p>
                  </Inn>
                </Up>
                <All>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>3</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "15px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                </All>
              </HistoryHold>
            </History>
          </InBody>
        </Body>
      </Container>
    </>
  );
};

export default BusinessHistory;

const HText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #ffa500;
  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText2 = styled.div`
  font-size: 12px;
  color: #3d3d3d;

  @media screen and (min-width: 800px) {
    font-size: 22px;
  }

  @media screen and (max-width: 799px) {
    font-size: 17px;
  }
`;

const CardImage2 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  img {
    width: 90%;
    height: 90%;
  }
`;

const CardComponent2 = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: #cecfffad;
  @media screen and (min-width: 670px) {
    width: calc(45% - 20px);
  }
`;
const CardButton2 = styled.button`
  max-width: 200px;
  border-radius: 5px;
  color: white;
  background-color: #ffa500;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #913cf9;
  }
`;

const Inn = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Two = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  margin: 5px;
  /* border-radius: 5px; */
`;

const Circle = styled.div<{ bc: string }>`
  width: 45px;
  height: 45px;
  @media screen and (max-width: 800px) {
    width: 33px;
    height: 33px;
  }
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bc }) => bc};
`;

const All = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  /* background-color: red; */
  /* margin-left: 30px; */
  /* padding: 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(17, 12, 12, 0.06) 0px 2px 4px -1px;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
`;

const Up = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
  position: sticky;
  top: 0.1px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
  background-color:white;
`;

const HistoryHold = styled.div`
  width: 80%;
  background-color: white;
  /* padding: 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
`;

const History = styled.div`
  width: 100%;
  /* background-color: #f9f4ff; */
  border-radius: 10px;
  margin-top: 15px;
  padding-top: 13px;
  margin-bottom: 25px;

  p {
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 800px) {
      font-size: 13px;
      font-weight: 600;
    }
  }
`;

const Head = styled.div`
  width: 100%;
  max-height: 240px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InHead = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const Message = styled.div`
  
    font-size: 17px;
    color: #383838;
    font-weight: 600;
    @media screen and (min-width: 800px) {
      font-size: 35px;
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
`;
const Info = styled.div`
  font-size: 20px;
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

