import styled from "styled-components";

const PersonalAccount = () => {
  return (
    <Container>
      <NameCard>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Logo>
            <p>Dc</p>
          </Logo>

          <Names>
            <div
              style={{
                color: "#444343",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Valerian Pedro
            </div>
            <div style={{ fontSize: "14px", color: "#082bf3" }}>
              @dcValerian
            </div>
          </Names>
        </div>
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
        <Inputs2>Valerian</Inputs2>
        <Inputs2>valerianpedro03@gmail.com</Inputs2>
        <Inputs></Inputs>
      </div>
    </Container>
  );
};

export default PersonalAccount;


const Container = styled.div`
  width: 70%;
`;
const Inputs = styled.div`
  border: none;
  outline: none;
  width: calc(100% - 20px);

  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  display: flex;
  align-items: center;
`;
const Inputs2 = styled.div`
  border: none;
  outline: none;
  width: calc(100% - 20px);
  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  color: #8a8888;
  display: flex;
  align-items: center;
`;
const NameCard = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 2px solid #ececec;
`;
const Logo = styled.div`
  width: 55px;
  height: 60px;
  font-size: 23px;
  color: #082bf3;
  background-color: #ececec;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }
`;
const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
