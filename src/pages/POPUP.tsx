import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  color: black;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 50;
`;

const PopupContainer = styled.div`
  width: 300px;
  height: fit-content;
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
  width: 88%;
  height: 86%;

  & > div:first-child {
    width: 100%;
    height: 200px;

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
    border-radius: 4px;
    width: 100%;
    margin-top: 0.5rem;
    height: 2.25rem;
    font-weight: 600;
    font-size: 0.75rem;
    cursor: pointer;
  }
`;

const PopUp = () => {
  return (
    <Overlay>
      <PopupContainer>
        <ContentWrapper>
          <div>
            <h1>Please enter name and email to continue purchase process</h1>

            <input type="text" />
          </div>
        </ContentWrapper>
      </PopupContainer>
    </Overlay>
  );
};

export default PopUp;
