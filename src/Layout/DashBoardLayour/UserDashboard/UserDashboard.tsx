import styled from "styled-components";
import moment from "moment";
import { useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const UserDashBoardHead = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const [show, setShow] = useState(false);

  return (
    <Container wd={toggle ? "value" : ""}>
      <Wrapper>
        <Top>
          <Name>All Gift Cards</Name>

          <Profile>
            <UserName>{moment(Date.now()).format("LLLL")}</UserName>
          </Profile>
        </Top>

        <Bottom>
          <SeeBalance>
            <BalanceDetails>
              <Viewer>
                <div style={{ marginBottom: "5px" }}>Available balance</div>
                <div
                  style={{ cursor: "pointer" }}
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
          </SeeBalance>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default UserDashBoardHead;
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
  color: #8a2be2;
`;
const Info = styled.div`
  font-size: 20px;
  color: #8a2be2;
`;
const BalanceDetails = styled.div``;

const Bottom = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  /* background-color: goldenrod; */
  width: 88%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Container = styled.div<{ wd: string }>`
  display: flex;
  width: calc(100% - ${({ wd }) => (wd ? "204" : "84")}px);
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  top: 0;
  z-index: 1;
  background-color: #f1f1f1;
  transition: all 360ms;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 577px) {
    justify-content: flex-end;
    gap: 5px;
  }
`;

const Name = styled.div`
  font-size: 35px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
  transition-timing-function: all 450ms;
  @media screen and (max-width: 500px) {
    background-color: goldenrod;
  }
`;

const UserName = styled.span`
  text-transform: capitalize;
  padding: 5px;
  color: black;
  font-size: 20px;
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
  @media screen and (max-width: 523px) {
    /* display: none; */
  }
`;
