// import { styled } from "styled-components";
// import OtpInput from "react-otp-input";
// import { FaArrowLeftLong } from "react-icons/fa6";

// import ImageSlider from "./ImageSlider";
// import img2 from "../../../assets/fin1.jpg";
// import img3 from "../../../assets/nazor.webp";
// import img4 from "../../../assets/image11.jpeg";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BeatLoader } from "react-spinners";
// import { useOtp } from "../../../functions/Auth/useOTP";
// import { goBack } from "../../../functions/useSpecialFunctions";

// const OTP = () => {
//   const images = [img2, img3, img4];

//   const { loading, resendOTP, verifyotp, setOtp, otp } = useOtp();

//   return (
//     <Container>
//       <Left>
//         <Icon onClick={goBack}>
//           <FaArrowLeftLong />
//           <Descriptions className="hove">Go Back</Descriptions>
//         </Icon>
//         <Title>Two-Step Verification</Title>
//         <img src="https://harnishdesign.net/demo/html/oxyy/images/otp-icon.png" />
//         <Notification>Enter the verification code we sent to</Notification>
//         <Email>firs********@gmail.com</Email>
//         <OtpWrapper>
//           <OtpInput
//             inputStyle={{
//               border: "1px solid grey",
//               width: "50px",

//               height: "45px",
//               outline: "none",
//               borderRadius: "3px",
//               fontSize: "18px",
//               margin: "4px",
//             }}
//             value={otp}
//             onChange={setOtp}
//             numInputs={4}
//             inputType="password"
//             renderInput={(props) => <input {...props} />}
//           />
//         </OtpWrapper>

//         <OtpWrapperMobile>
//           <OtpInput
//             inputStyle={{
//               borderRight: "1px solid rgb(0, 0, 0, 0.2)",
//               width: "60px",
//               borderTop: "0",
//               borderLeft: "0",
//               borderBottom: "0",
//               height: "48px",
//               outline: "none",
//               borderRadius: "3px",
//               fontSize: "18px",
//             }}
//             onChange={setOtp}
//             value={otp}
//             numInputs={4}
//             renderInput={(props) => <input {...props} />}
//           />
//         </OtpWrapperMobile>
//         <Button
//           bgValue={otp ? "value" : ""}
//           cusorValue={otp ? "pointer" : ""}
//           disabled={!otp || loading} // Disable the button when loading is true
//           onClick={verifyotp}
//         >
//           {loading ? <BeatLoader color="white" /> : "Verify"}
//         </Button>

//         <ToastContainer
//           position="top-right"
//           autoClose={10000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />

//         <Text>
//           Not received your code? <span onClick={resendOTP}>Resend code</span>
//         </Text>
//         <CopyRight>
//           <strong>Copyright © 2023 FirstCapital. All Rights Reserved.</strong>
//         </CopyRight>
//       </Left>
//       <Right>
//         <ImageSlider images={images} />
//       </Right>
//     </Container>
//   );
// };

// export default OTP;
// const Descriptions = styled.div`
//   position: absolute;
//   font-size: 12px;
//   font-weight: bolder;
//   padding: 3px 8px;
//   min-width: 60px;
//   background-color: #4b4b4bed;
//   color: white;
//   border-radius: 4px;
//   bottom: -28px;
//   display: none;
//   justify-content: center;
//   align-items: center;
//   z-index: 1;
// `;
// const Icon = styled.div`
//   font-size: 20px;
//   position: absolute;
//   top: 10%;
//   left: 5%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: rgb(0, 0, 0, 0.6);
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   cursor: pointer;
//   background-color: #f15a22;
//   color: white;
//   @media screen and (max-width: 800px) {
//     top: 0;
//     left: 10%;
//   }
//   @media screen and (max-width: 800px) {
//     top: 5%;
//   }
//   @media screen and (max-width: 500px) {
//     width: 35px;
//     height: 35px;
//     font-size: 16px;
//     top: 3%;
//     left: 7%;
//   }
//   &:hover .hove {
//     display: flex;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 500px) {
//     flex-direction: column-reverse;
//     height: fit-content;
//     padding-bottom: 30px;
//   }
// `;
// const Right = styled.div`
//   background-image: url("https://harnishdesign.net/demo/html/oxyy/images/login-bg-2.jpg");
//   width: 50%;
//   height: 100%;
//   flex-direction: column;
//   display: flex;
//   justify-content: center;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
//   position: relative;
//   h3 {
//     margin-left: 80px;
//     z-index: 2;
//     color: rgb(255, 255, 255);
//     font-size: 40px;
//     @media screen and (max-width: 800px) {
//       margin: 0;
//     }
//     @media screen and (max-width: 500px) {
//       font-size: 30px;
//       margin-left: 30px;
//     }
//   }
//   @media screen and (max-width: 500px) {
//     width: 100%;
//     height: 350px;
//   }
// `;
// const Notification = styled.span`
//   font-weight: 500;
//   font-size: 17px;
//   color: rgb(0, 0, 0, 0.5);
//   cursor: pointer;
//   margin: 20px;
//   text-align: center;

//   @media screen and (max-width: 500px) {
//     width: 250px;
//   }
// `;
// const Button = styled.button<{ cusorValue: string; bgValue: string }>`
//   width: 455px;
//   border: 0;
//   height: 50px;
//   text-transform: capitalize;
//   border-radius: 5px;
//   color: white;
//   font-size: 16px;
//   margin-bottom: 20px;
//   font-weight: 600;
//   transition: all 400ms;
//   cursor: ${({ cusorValue }) => (cusorValue ? "pointer" : "not-allowed")};

//   background-color: ${({ bgValue }) => (bgValue ? "#f15a22" : "#f1592284")};

//   &:hover {
//     /* background-color: ; */
//     background-color: ${({ bgValue }) => (bgValue ? "#f15922eb" : "#f1592284")};

//     color: #fff;
//   }

//   @media screen and (max-width: 800px) {
//     width: 320px;
//   }
//   @media screen and (max-width: 800px) {
//     width: 320px;
//   }
//   @media screen and (max-width: 500px) {
//     width: 260px;
//   }
//   @media screen and (max-width: 375px) {
//     width: 260px;
//   }
//   @media screen and (max-width: 320px) {
//     width: 260px;
//   }
// `;
// const Text = styled.div`
//   color: rgb(0, 0, 0, 0.5);
//   font-size: 15px;
//   font-weight: 500;

//   span {
//     color: #f26633;
//     cursor: pointer;
//   }
// `;

// const CopyRight = styled.span`
//   color: rgb(0, 0, 0, 0.5);
//   font-size: 15px;
//   font-weight: 400;

//   position: absolute;
//   bottom: 0;

//   @media screen and (max-width: 500px) {
//     font-size: 12px;
//   }
// `;
// const Left = styled.div`
//   width: 50%;
//   height: 100%;
//   flex-direction: column;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   @media screen and (max-width: 500px) {
//     width: 100%;
//     padding-bottom: 30px;
//   }
// `;

// const Title = styled.span`
//   font-weight: 500;
//   font-size: 25px;
//   margin-bottom: 30px;
//   margin-top: 15px;
//   color: rgb(0, 0, 0, 0.7);
// `;

// const Email = styled.span`
//   font-weight: 400;
//   margin-bottom: 15px;
//   color: rgb(0, 0, 0, 0.6);
// `;

// const OtpWrapper = styled.div`
//   width: fit-content;
//   margin-top: 4px;
//   margin-bottom: 16px;
//   border-radius: 6px;
//   height: 50px;
//   @media screen and (max-width: 800px) {
//     width: 320px;
//   }
//   @media screen and (max-width: 500px) {
//     display: none;
//   }
// `;
// const OtpWrapperMobile = styled.div`
//   width: fit-content;
//   border: 1px solid rgb(0, 0, 0, 0.2);
//   margin-top: 20px;
//   margin-bottom: 30px;
//   border-radius: 6px;
//   height: 50px;
//   display: none;
//   @media screen and (max-width: 800px) {
//   }
//   @media screen and (max-width: 500px) {
//     display: block;
//   }
// `;
