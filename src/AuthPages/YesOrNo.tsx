import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { newurl } from "../API/Business/BusinessEndpoints";
// import LoadingState from "../../../LoadingScreen";

const YesOrNo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [myChecked, setMyChecked] = useState(true);
  console.log(setMyChecked);

  const [loading, setLoading] = useState(false);
  console.log(loading);

  const noStaff = async () => {
    const newURL = `${newurl}/final-verification/${id}`;
    setLoading(true);
    await axios
      .post(newURL, { response: "No" })
      .then((res) => {
        console.log(res);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "user's account has been deleted, successful",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Error: ${error}`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/");
        });
        setLoading(false);
      });
  };

  const yesStaff = async () => {
    const newURL = `${newurl}/final-verification/${id}`;
    setLoading(true);
    await axios
      .post(newURL, { response: "Yes" })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "user's account has been verified, successful",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/check-mail");
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(`this is error `, error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `An Error occur: ${error}`,
          showConfirmButton: false,
          // timer: 2500,
        }).then(() => {
          // navigate("/");
        });
        setLoading(false);
      });
  };

  return (
    <Container>
      {/* {loading ? <LoadingState /> : null} */}
      <Wrapper>
        <Card>
          <Title>
            <TitleHead>Activate Staff Account </TitleHead>
            <br />
            <TitleSub>
              {/* You are seeing this page because <span>NAME</span>, claims to be a staff of your Company */}
              Click Yes to activate this staff account Click No to reject this
              staff account
              <br />
              <br />
              <TitleSub2>
                Would you <span>AGREE</span> that he/she is a responsible staff
                of your Company/Organisation/Association?
              </TitleSub2>
              {/* <br /> */}
              <InputRow>
                <BUtton bg={myChecked ? "bg" : ""} onClick={yesStaff}>
                  Yes
                </BUtton>

                <BUtton
                  bg={myChecked ? "" : ""}
                  onClick={() => {
                    noStaff();
                  }}
                >
                  No
                </BUtton>
              </InputRow>
              If you <span>AGREE</span>, his/her secret Token code will be sent
              to you via eMail, please check and send to him/her!
            </TitleSub>
          </Title>
          <br />
          <br />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default YesOrNo;

const InputRow = styled.div`
  display: flex;
`;

const BUtton = styled.button<{ bg: string }>`
  margin: 20px;
  width: 80%;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "blue" : "red")};
  color: white;
  border: 0;
  outline: none;
  border-radius: 5px;
  font-size: 20px;
  font-family: Poppins;
  text-transform: uppercase;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;

const TitleSub2 = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 13px;
  span {
    color: #000269;
    font-weight: bold;
  }
`;

const TitleSub = styled.div`
  color: #000000bc;
  font-weight: 500;
  font-size: 13px;
  span {
    color: #5833c7;
    font-weight: bold;
  }
`;

const TitleHead = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: #5833c7;
`;

const Title = styled.div`
  margin-top: 30px;
`;

const Card = styled.div`
  width: 90%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 450px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.185) 0px 1px 3px;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;
