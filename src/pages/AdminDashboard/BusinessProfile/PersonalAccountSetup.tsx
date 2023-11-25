import styled from "styled-components";
import pic from "../../../Assets/trancard.svg";

const PersonalAccountSetup = () => {
  return (
    <Container>
      <NameCard>
        <Update>
          <CircleText>
            <Circle>
              <Img src={pic} />
            </Circle>
            {/* <label htmlFor="pix">upload ogo</label> */}
          </CircleText>
          <Input
            // onChange={ImageOnchange}
            id="pix"
            // type="multipart/form-data"
            type="file"
          />
          <Buttons>Update company logo</Buttons>
        </Update>
      </NameCard>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Inputs>Valerian Pedro</Inputs>
        <Inputs>Valeriapedro03@gmail.com</Inputs>
        <Inputs>+08037171484</Inputs>
        <Inputs>4 Giftcards Created</Inputs>
      </div>
    </Container>
  );
};

export default PersonalAccountSetup;

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
