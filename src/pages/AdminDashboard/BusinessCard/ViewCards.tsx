import { useState } from "react";
import styled from "styled-components";
import pic from "../../../Assets/trancard.svg";
import Card from "./Card";
import axios from "axios";
import { useAppSelector } from "../../../GlobalStore/Store";
import { newurl } from "../../../API/Business/BusinessEndpoints";

const ViewCards = () => {
  const [cad, setCad] = useState([]);
  const business = useAppSelector((state) => state.bizClient);

  const apiUrl = "https://giftcard-api.onrender.com";
  axios.get(`${newurl}/api/businessgiftcard/${business?._id}`).then((res) => {
    // console.log("cards", res.data.data.giftCard);
    setCad(res.data.data.giftCard);
  });

  return (
    <div>
      {cad === null ? (
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
            {cad?.map((props: any) => (
              <Card
                key={props._id}
                pic={props.BrandLogo}
                busyname={props.name}
                amount={props.moneyWorth}
                colour={props.colour}
                code={props.uniqueID}
              />
            ))}
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default ViewCards;

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
