import React from "react";
import { styled } from "styled-components";
import { BiSolidPhone } from "react-icons/bi";


interface iUserCard {
  firstname?: string;
  lastname?: string;
  email?: string;
  img?: string;
  referredStaff?: string;
  address?: string;
  phonenumber?: string;
  bcc?: string;
  name?: string;
  branchName?: string;
  none?: string;
}

const UserGiftCardProps: React.FC<iUserCard> = ({
  firstname,
  lastname,
  email,
  img,
  referredStaff,
  address,
  phonenumber,
  bcc,
  
}) => {
  return (
    <div>
      <Card>
        <Bgc bcc={bcc}>
          <UserName>
            {firstname} &nbsp; {lastname}
          </UserName>
          <BusinessName>{email}</BusinessName>
          <img src={img} />
        </Bgc>
        <Wrap>
          <Address>{address}</Address>
          <Address>Referred by {referredStaff}</Address>
          <PhoneNumber>
            <BiSolidPhone />
            {phonenumber}
          </PhoneNumber>
        
        </Wrap>
      </Card>
    </div>
  );
};

export default UserGiftCardProps;

const Wrap = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Card = styled.div`
  width: 330px;
  height: 350px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
  padding-bottom: 20px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  border-radius: 0px 0px 10px 10px;
`;
const Bgc = styled.div<{ bcc?: string }>`
  width: 100%;
  background-color: ${(props) => props.bcc};
  height: 145px;
  flex-direction: column;
  display: flex;
  padding-top: 7px;
  align-items: center;
  position: relative;

  img {
    width: 105px;
    height: 110px;
    object-fit: cover;
    position: absolute;
    top: 55%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;
const UserName = styled.h4`
  font-weight: 600;
  color: white;
  font-size: 18px;
  text-transform: capitalize;
  margin-top: 10px;
`;
const BusinessName = styled.span`
  color: white;
  text-transform: capitalize;
  font-size: 14px;
`;
const Address = styled.p`
  width: 230px;
  text-align: center;
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.8);
`;
const PhoneNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.8);
  margin-top: 10px;
  font-size: 15px;
  :nth-child(1) {
    margin-right: 5px;
  }
`;

