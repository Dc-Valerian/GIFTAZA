import React from "react";
import styled from "styled-components";
import pic from "../../../Assets/money.webp";
import axios from "axios";
import Swal from "sweetalert2";
import { UseAppDispatch, useAppSelector } from "../../../GlobalStore/Store";
import { newurl } from "../../../API/Business/BusinessEndpoints";

const PersonalAccount = () => {
  const [previewImage, setPreviewImage] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const business = useAppSelector((state) => state.bizClient);
  const card = useAppSelector((state) => state.DataCard);

  const ImageOnchange = (e: any) => {
    const file = e.target.files[0];
    setLogo(file);
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    console.log(url);
  };

  // allow user upload profile image
  const updateProfileImage = () => {
    if (logo) {
      // create a new FormData object and append the selected image file to it
      const formData = new FormData();
      formData.append("logo", logo);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // make a request to update the company logo using the formData object
      axios
        .patch(
          `${newurl}/api/updatebusinesslogo/${business?._id}
  `,
          formData,
          config
        )
        .then((response) => {
          console.log(response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "image uploaded SUCCESSFULLY.",
            // timer: 1500,
            confirmButtonText: "Okay!",
          });
        })
        .catch((error: any) => {
          // handle error
          console.log("this is error", error);
        });
    }
  };

  console.log(business?._id);

  return (
    <Container>
      <NameCard>
        <Update>
          <CircleText>
            <Circle>
              <Img src={card?.logo === "" ? card?.logo : card?.logo} />
            </Circle>
            <label htmlFor="pix">upload logo</label>
          </CircleText>
          <Input
            onChange={ImageOnchange}
            id="pix"
            // type="multipart/form-data"
            type="file"
          />
          <Buttons onClick={updateProfileImage}>Update company logo</Buttons>
        </Update>
      </NameCard>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}>
        <Inputs>{business?.companyName}</Inputs>
        <Inputs>{business?.email}</Inputs>
        <Inputs>+{business?.phoneNumber}</Inputs>
        <Inputs>{business?.giftCard.length} Giftcards Created</Inputs>
      </div>
    </Container>
  );
};

export default PersonalAccount;

const CircleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    padding: 10px 30px;
    border-bottom: 1px solid #ef9636;
    color: #ef9636;
    font-size: 13px;
    border-radius: 10px;
    /* color: #fff; */

    :hover {
      cursor: pointer;
    }
  }
`;

const Buttons = styled.label`
  height: 40px;
  width: 200px;
  background-color: blueviolet;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }
`;

const Input = styled.input`
  display: none;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  /* border-radius: 50%; */
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  flex-direction: column;
  font-size: 30px;

  span {
    font-size: 12px;
  }
`;

const Update = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 20px;
  /* flex-direction: column; */
`;

const Container = styled.div`
  width: 70%;
`;
const Inputs = styled.div`
  border: none;
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

const NameCard = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #ececec;
`;
