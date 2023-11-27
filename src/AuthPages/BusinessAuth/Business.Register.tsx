import styled from "styled-components";
import rstar from "../../Assets/stars.svg";
import lstar from "../../Assets/stars.svg";
import phone from "../../Assets/phone.png";
import flower from "../../Assets/flower.svg";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import { useBusinessRegistration } from "../../Functions/Business/BusinessRegistration";
import { TbSquareKey } from "react-icons/tb";

const BizzSignUp = () => {
  const { Submit, errors, postData, register } = useBusinessRegistration();

  return (
    <div>
      {" "}
      <Container onSubmit={Submit}>
        <Left>
          <img
            src={rstar}
            alt=""
            style={{ position: "absolute", left: "75%", top: "20%" }}
          />
          <img
            src={lstar}
            alt=""
            style={{
              position: "absolute",
              top: "20%",
              left: "35px",
              height: "360px",
            }}
          />
          <h4>GIFTAZA</h4>
          <H1>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .typeString("Let's get..")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()

                  .typeString("You started")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </H1>
          <p>
            You’re a few steps away. Fill the required form and start trading
            like a boss 😎
          </p>
          <Img src={phone} alt="" />
          <img
            src={flower}
            alt=""
            style={{ position: "absolute", bottom: "1%", left: "1px" }}
          />
        </Left>
        <Right>
          <h2>Create an Account</h2>
          <p>Let us know you 😎</p>
          <Box>
            <Inputs>
              <MdOutlinePersonOutline
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input {...register("companyName")} placeholder="Business Name" />
              <p>{errors?.companyName && errors?.companyName?.message}</p>
            </Inputs>

            <Inputs>
              <IoMailOutline
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="E-mail address" {...register("email")} />
              <p>{errors?.email && errors?.email?.message}</p>
            </Inputs>
            <Inputs>
              <BsTelephone
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input {...register("phoneNumber")} placeholder="Phone-no" />
              <p>{errors?.phoneNumber && errors?.phoneNumber?.message}</p>
            </Inputs>
            <Inputs>
              <TbSquareKey
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                }}
              />
              <input {...register("password")} placeholder="Password" />
              {errors?.password && errors?.password?.message}
            </Inputs>
          </Box>
          <div>
            <Button disabled={postData?.isLoading} type="submit">
              {postData?.isLoading ? (
                <BeatLoader color="white" />
              ) : (
                "Register now"
              )}
            </Button>
            <ToastContainer
              position="top-right"
              autoClose={10000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>

          <P>
            Already have an account.??{" "}
            <NavLink to="/business-login" style={{ textDecoration: "none" }}>
              <span style={{ color: "blue", textDecoration: "none" }}>
                Log In
              </span>
            </NavLink>
          </P>
        </Right>
      </Container>
    </div>
  );
};

export default BizzSignUp;
const P = styled.p`
  margin: 0;
  margin-left: 60px;
  font-size: 15px;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    margin: 0;
    font-size: 15px;
    margin-top: 10px;
    width: 80%;
  }
`;

const Button = styled.button`
  width: 170px;
  height: 48px;
  margin-left: 60px;
  border: 0;
  background-color: #8246f3;
  color: white;
  border-radius: 10px;
  margin-top: 31px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-top: 20px;
    width: 80%;
  }
`;

const Inputs = styled.div`
  background-color: #f9f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 7px;

    ::placeholder {
      color: silver;
    }
  }
`;

const Box = styled.div`
  width: 650px;
  height: 240px;
  /* background-color: green; */
  margin-left: 60px;
  display: grid;
  grid-template-rows: repeat(2, 65px);
  grid-template-columns: repeat(2, 1fr);
  gap: 23px;
  margin-top: 43px;

  @media screen and (max-width: 960px) {
    width: 90%;
    height: 480px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 60px);
    margin: 0;
    margin-top: 20px;
  }
`;

const Right = styled.div`
  h2 {
    margin-top: 60px;
    margin-left: 60px;
    font-size: 36px;

    @media screen and (max-width: 960px) {
      margin: 0;
      margin-top: 10px;
      font-size: 25px;
    }
  }

  p {
    margin-left: 60px;
    margin-top: 45px;
    font-size: 20px;
    font-family: 600;

    @media screen and (max-width: 960px) {
      margin: 0;
      margin-top: 10px;
      font-size: 25px;
      font-size: 18px;
    }
  }
`;
const H1 = styled.h1`
  color: white;
  font-size: 44px;
  text-align: center;
  margin-top: 50px;
  animation: typing 4s steps(20);
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid black; */

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Img = styled.img`
  height: 230px;
  margin-top: 25px;
  transform: translate(-20%, -20%);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  left: 35%;
  bottom: 1px;
  animation: bounce 2s;
  animation-iteration-count: infinite;

  @media screen and (max-width: 960px) {
    position: static;
    height: 210px;
    margin-top: 60px;
    margin-left: 120px;
  }
  /* 
  :hover {
    animation: bounce 0.5s;
    animation-iteration-count: infinite;
  } */
  @keyframes bounce {
    0%,
    100% {
      transform: translate(-20%, -20%) scale(1);
    }
    50% {
      transform: translate(-20%, -20%) scale(1.2);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
const Left = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #8246f3;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  h4 {
    color: white;
    font-size: 21px;
    font-family: Inria serif;
    font-weight: 600;
    margin-top: 30px;
  }

  // h1 {
  // //   color: white;
  // //   font-size: 44px;
  // //   text-align: center;
  // //   margin-top: 50px;

  // //   @media screen and (max-width: 960px) {
  // //     font-size: 30px;
  // //   }
  // }
  p {
    color: white;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    width: 65%;
    font-size: 23px;

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
  }
`;
