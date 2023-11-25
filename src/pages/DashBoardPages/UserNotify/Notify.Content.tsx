import React from "react";
import styled from "styled-components";
import { BsAppIndicator } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NotifyContent = () => {
  const dummy: any = [
    { title: "Welcome, we are happy to have you onboard" },
    { title: "Someone sent you a gift card. Click for details" },
  ];
  return (
    <div>
      <Container>
        {dummy.map((props: any) => (
          <Item>
            <div style={{ display: "flex", gap: "20px" }}>
              <Icon>
                <BsAppIndicator />
              </Icon>
              <Text>{props.title}</Text>
            </div>
            <Arr>
              <MdOutlineKeyboardArrowRight />
            </Arr>
          </Item>
        ))}
      </Container>
    </div>
  );
};

export default NotifyContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 40px;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 20px);
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;

  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
`;
const Icon = styled.div`
  color: #5e5e5e;
`;
const Text = styled.div`
  width: 100%;
  margin-bottom: 3px;
  color: #303030;
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
