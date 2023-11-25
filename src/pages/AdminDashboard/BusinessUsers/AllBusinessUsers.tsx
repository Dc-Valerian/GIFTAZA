import styled from "styled-components";
import UserGiftCardProps from "./UserGiftCardProps";

const AllBusinessUsers = () => {
  return (
    <div>
      <Wrapper>
        <Head>
          <HoldToggle>
            <h2>Users</h2>
          </HoldToggle>
        </Head>
        <UserGiftCardProps
          name="Sanni Fortune"
          branchName="wilmer"
          img="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/usrbig2.jpg"
          address="456, Estern evenue, Courtage area, New York"
          phonenumber=" 345-678-6665"
          bcc=" #B64CDF"
          firstname=""
          lastname=""
          email=""
          referredStaff=""
          none=""
        />
        <UserGiftCardProps
          name="Sanni Fortune"
          branchName="wilmer"
          img="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/usrbig2.jpg"
          address="456, Estern evenue, Courtage area, New York"
          phonenumber=" 345-678-6665"
          bcc=" #212529"
          firstname=""
          lastname=""
          email=""
          referredStaff=""
          none=""
        />
        <UserGiftCardProps
          name="Sanni Fortune"
          branchName="wilmer"
          img="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/usrbig2.jpg"
          address="456, Estern evenue, Courtage area, New York"
          phonenumber=" 345-678-6665"
          bcc=" #F89F1A"
          firstname=""
          lastname=""
          email=""
          referredStaff=""
          none=""
        />
        <UserGiftCardProps
          name="Sanni Fortune"
          branchName="wilmer"
          img="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/usrbig2.jpg"
          address="456, Estern evenue, Courtage area, New York"
          phonenumber=" 345-678-6665"
          bcc=" #795548"
          firstname=""
          lastname=""
          email=""
          referredStaff=""
          none=""
        />
        <UserGiftCardProps
          name="Sanni Fortune"
          branchName="wilmer"
          img="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/usrbig2.jpg"
          address="456, Estern evenue, Courtage area, New York"
          phonenumber=" 345-678-6665"
          bcc=" #00BCD4"
          firstname=""
          lastname=""
          email=""
          referredStaff=""
          none=""
        />
        <UserGiftCardProps
          name="Sanni Fortune"
          branchName="wilmer"
          img="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/usrbig2.jpg"
          address="456, Estern evenue, Courtage area, New York"
          phonenumber=" 345-678-6665"
          bcc=" #4CAF50"
          firstname=""
          lastname=""
          email=""
          referredStaff=""
          none=""
        />
      </Wrapper>
    </div>
  );
};

export default AllBusinessUsers;
const Head = styled.div`
  width: calc(100% - 47px);
  padding-left: 23px;
  padding-right: 23px;
  height: 150px;
  background-color: #f1f1f1;
`;
const HoldToggle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 17px;
    color: #383838;
    font-weight: 600;
    @media screen and (min-width: 800px) {
      font-size: 35px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
