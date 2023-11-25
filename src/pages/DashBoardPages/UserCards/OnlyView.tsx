import styled from "styled-components";
import pic from "../../../Assets/trancard.svg";
const OnlyViewCards = () => {
  const dummy = [{ card: "One" }, { card: "Two" }];
  return (
    <div>
      {dummy.length === 0 ? (
        <Nothing>
          <CenterHold>
            <Pic>
              <img src={pic} />
            </Pic>
            <Txt>No Withdrawals Yet!</Txt>
            <Sxt>
              This place is empty because you haven't made any withdrawal 😒
            </Sxt>
          </CenterHold>
        </Nothing>
      ) : (
        <div>
          <CardContainer>
            <Nothing>
              <CenterHold>
                <Pic>
                  <img src={pic} />
                </Pic>
                <Txt>Whoops! No Activity</Txt>
                <Sxt>You’ll see your gift cards soon.</Sxt>
              </CenterHold>
            </Nothing>
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default OnlyViewCards;

const CardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const Nothing = styled.div`
  width: 100%;
  height: calc(100vh - 205px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterHold = styled.div`
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Pic = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 50%;
  }
`;
const Txt = styled.div`
  font-size: 16px;
  color: gray;
  font-weight: bold;
`;
const Sxt = styled.div`
  font-size: 14px;
  max-width: 250px;
  color: #9c9c9c;
`;
