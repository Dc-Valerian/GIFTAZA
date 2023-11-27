import { styled } from "styled-components";
import OtpInput from "react-otp-input";
import { FaArrowLeftLong } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// import { useNavigate } from "react-router";
// import { newurl } from "../../../API/Business/BusinessEndpoints";
// import axios from "axios";
// import Swal from "sweetalert2";

const OTP = () => {
  // const [otp, setOtp] = React.useState("");

  // const { id } = useParams();
  // const navigate = useNavigate();
  // const [myChecked, setMyChecked] = useState(true);
  // const [loading, setLoading] = useState(false);

  const [token, setToken] = useState<string>("");

  // const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));

  // const [activeOTPIndex, setAtiveOTPIndex] = useState<number>(0);

  // const GetOTP = async () => {
  //   const newURL = `${newurl}/`;

  //   setLoading(true);
  //   await axios
  //     .post(newURL, { OTP: token })

  //     .then((res) => {
  //       console.log(`this is token`, token);
  //       console.log(`this is token`, res);
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: `${res.data.message}`,
  //         showConfirmButton: false,
  //         timer: 2500,
  //       }).then(() => {
  //         navigate("/sign-in");
  //       });
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("this is error", error);
  //       console.log(`this is token`, token);
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: `Error: ${error}`,

  //         text: `${error?.response?.data?.message}`,
  //         showConfirmButton: false,
  //         timer: 2500,
  //       }).then(() => {
  //         navigate("/");
  //       });
  //       setLoading(false);
  //     });
  // };

  return (
    <Container>
      <Left>
        <Icon>
          <FaArrowLeftLong />
          <Descriptions className="hove">Go Back</Descriptions>
        </Icon>
        <Title>Two-Step Verification</Title>
        <img src="https://harnishdesign.net/demo/html/oxyy/images/otp-icon.png" />
        <Notification>Enter the verification code we sent to</Notification>
        <Email>firs********@gmail.com</Email>
        <OtpWrapper>
          <OtpInput
            inputStyle={{
              border: "1px solid grey",
              width: "50px",

              height: "45px",
              outline: "none",
              borderRadius: "3px",
              fontSize: "18px",
              margin: "4px",
            }}
            value={token}
            onChange={setToken}
            numInputs={4}
            inputType="password"
            renderInput={(props) => <input {...props} />}
          />
        </OtpWrapper>

        <OtpWrapperMobile>
          <OtpInput
            inputStyle={{
              borderRight: "1px solid rgb(0, 0, 0, 0.2)",
              width: "60px",
              borderTop: "0",
              borderLeft: "0",
              borderBottom: "0",
              height: "48px",
              outline: "none",
              borderRadius: "3px",
              fontSize: "18px",
            }}
            onChange={setToken}
            value={token}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
          />
        </OtpWrapperMobile>
        <Button>Verify</Button>

        <Text>
          Not received your code? <span>Resend code</span>
        </Text>
        <CopyRight>
          <strong>Copyright © 2023 FirstCapital. All Rights Reserved.</strong>
        </CopyRight>
      </Left>
    </Container>
  );
};

export default OTP;
const Descriptions = styled.div`
  position: absolute;
  font-size: 12px;
  font-weight: bolder;
  padding: 3px 8px;
  min-width: 60px;
  background-color: #4b4b4bed;
  color: white;
  border-radius: 4px;
  bottom: -28px;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Icon = styled.div`
  font-size: 20px;
  position: absolute;
  top: 10%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #f15a22;
  color: white;
  @media screen and (max-width: 800px) {
    top: 0;
    left: 10%;
  }
  @media screen and (max-width: 800px) {
    top: 5%;
  }
  @media screen and (max-width: 500px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
    top: 3%;
    left: 7%;
  }
  &:hover .hove {
    display: flex;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    height: fit-content;
    padding-bottom: 30px;
  }
`;

const Notification = styled.span`
  font-weight: 500;
  font-size: 17px;
  color: rgb(0, 0, 0, 0.5);
  cursor: pointer;
  margin: 20px;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;
const Button = styled.button`
  width: 455px;
  border: 0;
  height: 50px;
  text-transform: capitalize;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 600;
  transition: all 400ms;
  cursor: pointer;

  background-color: #f15a22;

  &:hover {
    /* background-color: ; */
    background-color: #f1592284;

    color: #fff;
  }

  @media screen and (max-width: 800px) {
    width: 320px;
  }
  @media screen and (max-width: 800px) {
    width: 320px;
  }
  @media screen and (max-width: 500px) {
    width: 260px;
  }
  @media screen and (max-width: 375px) {
    width: 260px;
  }
  @media screen and (max-width: 320px) {
    width: 260px;
  }
`;
const Text = styled.div`
  color: rgb(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 500;

  span {
    color: #f26633;
    cursor: pointer;
  }
`;

const CopyRight = styled.span`
  color: rgb(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 400;

  position: absolute;
  bottom: 0;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 30px;
  margin-top: 15px;
  color: rgb(0, 0, 0, 0.7);
`;

const Email = styled.span`
  font-weight: 400;
  margin-bottom: 15px;
  color: rgb(0, 0, 0, 0.6);
`;

const OtpWrapper = styled.div`
  width: fit-content;
  margin-top: 4px;
  margin-bottom: 16px;
  border-radius: 6px;
  height: 50px;
  @media screen and (max-width: 800px) {
    width: 320px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const OtpWrapperMobile = styled.div`
  width: fit-content;
  border: 1px solid rgb(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
  height: 50px;
  display: none;
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
