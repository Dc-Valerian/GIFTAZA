import styled from "styled-components";
import Table from "./UserGiftCardProps";

interface User {
  username: string;
  email: string;
  phone: string;
  contact: string;
}

const AllBusinessUsers = () => {
  const users: User[] = [
    {
      username: "Valerian Pedro",
      email: "valerianpedro03@gmail.com",
      phone: "0",
      contact: "New York",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "10",
      contact: "New York",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "3",
      contact: "New York",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      contact: "New York",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      contact: "New York",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      contact: "New York",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      contact: "New York",
    },
  ];

  return (
    <Wrapper>
      <Head>
        <HoldToggle>
          <h2>Users</h2>
        </HoldToggle>
      </Head>
      <Table users={users} />
    </Wrapper>
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
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
