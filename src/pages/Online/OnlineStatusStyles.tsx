import styled from "styled-components";
import { HiStatusOnline } from "react-icons/hi";
import { IoCloudOfflineSharp } from "react-icons/io5";

export const Container = styled.div<{ bg: string; display: string }>`
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => (bg ? "black" : "white")};
  color: ${({ bg }) => (bg ? "red" : "#ff5d1b")};
  backdrop-filter: blur(3px);
  z-index: 999;
  display: ${(props) => props.display};
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    height: 25px;
  }
  transition: all 600ms;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OnlineStatusIcon = styled(HiStatusOnline)`
  margin-right: 6px;
  margin-top: 3px;
`;
export const OfflineStatusIcon = styled(IoCloudOfflineSharp)`
  margin-top: 3px;
  margin-right: 6px;
`;