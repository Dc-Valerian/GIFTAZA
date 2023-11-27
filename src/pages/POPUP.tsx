import styled from "styled-components";
import { useUserRegister } from "../Functions/User/UserRegister";
import { useEffect, useState } from "react";
import { useAppSelector } from "../GlobalStore/Store";
import { newurl } from "../API/Business/BusinessEndpoints";

import axios from "axios";
const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  color: black;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 50;
`;

const PopupContainer = styled.form`
  width: 300px;

  padding: 1.5rem;
  border: 1px solid #8d26ae;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 400px;
    height: 440px;
  }
`;

const ContentWrapper = styled.div`
  & > div:first-child {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  text-align: center;

  font-weight: 600;

  & > div:nth-child(2) {
    color: #ffffffad;
    font-size: 0.75rem;
  }

  button {
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56%,
      #ff26b9 100%,
      #fe34b9 100%
    );
    color: #ffffff;
    border-radius: 10px;
    width: 100%;
    margin-top: 50px;

    height: 2.25rem;
    font-weight: 600;
    font-size: 0.75rem;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 2.25rem;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
const Inputs = styled.div`
  border: 1px solid black;
  outline: none;
  width: calc(100% - 20px);

  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
`;

const PopUp = () => {
  const { Submit, errors, isLoading, loading, postData, register } =
    useUserRegister();
  const business = useAppSelector((state) => state.bizClient);
  const [getCompanyName, setGetCompanyName] = useState("");
  const getBiz = async () => {
    console.log("id", business?._id);
    console.log("email", business?.email);
    await axios
      .get(`${newurl}/api/getsinglebusiness/${business?._id}`)

      .then((res) => {
        setGetCompanyName(res?.data?.data?.companyName);
        console.log("getcomapny name", getCompanyName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBiz();
  }, []);

  return (
    <Overlay>
      <PopupContainer onSubmit={Submit}>
        <ContentWrapper>
          <div>
            <h1>Please enter name and email to continue purchase process</h1>

            <div>
              <input {...register("name")} placeholder="name" />
              {errors?.password && errors?.password?.message}
              <br />
              <input {...register("email")} placeholder="name" />

              <br />
              <Inputs>{getCompanyName}</Inputs>
            </div>
          </div>

          <button type="submit">Submit</button>
        </ContentWrapper>
      </PopupContainer>
    </Overlay>
  );
};

export default PopUp;
