import React from "react";
import styled from "styled-components";
import wave from "../../../Assets/way.svg";
import wave2 from "../../../Assets/waveman1.svg";
import { useAppSelector } from "../../../GlobalStore/Store";
import { allGiftCard } from "../../../API/Business/BusinessEndpoints";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface iCard {
  pic: any;
  busyname: string;
  amount: number;
  colour: string;
  code: string;
}

declare global {
  interface Window {
    FlutterwaveCheckout?: any;
  }
}
const Card: React.FC<iCard> = ({ pic, busyname, amount, colour, code }) => {
  const AllgiftCards = useQuery({
    queryKey: ["Allgiftcards"],
    queryFn: allGiftCard,
  });

  const user = useAppSelector((state) => state?.userData);
  console.log(user);
  const total = AllgiftCards?.data?.data?.data;
  const totalTotal: number = total?.moneyWorth;
  console.log(totalTotal);

  console.log("bus", AllgiftCards.data);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Link to="/popup" style={{ textDecoration: "none" }}>
        <Container bc={colour}>
          <Wave>
            <img src={wave} />
          </Wave>
          <Up>
            <Amount>
              ₦ <span>{amount} </span>
            </Amount>
          </Up>
          <Mid>
            <Logo>
              <img src={pic}></img>
            </Logo>
            <BusinessName>{busyname}</BusinessName>
          </Mid>
          <Down>
            <Code>{code}</Code>
          </Down>
          <Wave2>
            <img src={wave2} />
          </Wave2>
        </Container>
      </Link>
    </div>
  );
};
export default Card;

const Container = styled.div<{ bc: string }>`
  position: relative;
  width: 270px;
  height: 170px;
  background-color: ${(props) => props.bc};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
const Up = styled.div`
  height: 20%;
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;
const Amount = styled.div`
  display: flex;
  gap: 3px;
  /* align-items: center; */
  font-size: 15px;
  margin-right: 20px;
  color: wheat;
  span {
    font-size: 23px;
    font-weight: bold;
  }
`;
const Mid = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: wheat;
`;
const Logo = styled.div`
  height: 50px;
  width: 50px;
  font-size: 36px;
  div {
    margin: auto;
  }

  img {
    height: 30px;
  }
`;
const BusinessName = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const Down = styled.div`
  height: calc(25% - 10px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
`;
const Wave = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 15px;
  overflow: hidden;
  line-height: 0;
  img {
    height: 100%;
  }
`;
const Wave2 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  overflow: hidden;
  line-height: 0;
  img {
    height: 100%;
  }
`;
const Code = styled.div`
  display: flex;

  gap: 3px;
  /* align-items: center; */
  font-size: 10px;
  font-weight: bold;
  margin-left: 20px;
  color: #f5deb3b3;
`;
