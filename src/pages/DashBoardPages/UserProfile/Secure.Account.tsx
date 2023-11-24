import styled from "styled-components";
import { BsAppIndicator } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SecureAccount = () => {
  return (
    <div>
      <Container>
        <Item>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Icon>
              <BsAppIndicator />
            </Icon>
            <Text>Create Transaction PIN</Text>
          </div>
          <Arr>
            <MdOutlineKeyboardArrowRight />
          </Arr>
        </Item>
        <Item>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Icon>
              <BsAppIndicator />
            </Icon>
            <Text>Change Password</Text>
          </div>
          <Arr>
            <MdOutlineKeyboardArrowRight />
          </Arr>
        </Item>
        <Item>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Icon2>
              <BsAppIndicator />
            </Icon2>
            <Text2>Delete My Account</Text2>
          </div>
          <Arr>
            <MdOutlineKeyboardArrowRight />
          </Arr>
        </Item>
      </Container>
    </div>
  );
};

export default SecureAccount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 40px;
  width: 70%;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
`;
const Icon = styled.div`
  color: #5e5e5e;
`;
const Text = styled.div`
  margin-bottom: 3px;
  color: #303030;
`;
const Icon2 = styled.div`
  color: #c70707;
`;
const Text2 = styled.div`
  margin-bottom: 3px;
  color: #c70707;
`;
const Arr = styled.div`
  font-size: 20px;
  margin-right: 10px;
  color: #5e5e5e;
`;
