import styled from "styled-components";

import NotifyContent from "./Notify.Content";

const UserNotify = () => {
  const dummy_notify: any = [{ item: "welcome" }];
  return (
    <Container>
      <Head>
        <Hold>
          <h2>Notifications</h2>
        </Hold>
      </Head>
      <Body>
        {dummy_notify.length > 0 ? (
          <NotifyContent />
        ) : (
          <Nothing>
            <CenterHold>
              <Pic>404</Pic>
              <Txt>Whoops! No Activity</Txt>
              <Sxt>You’ll get new notifications soon.</Sxt>
            </CenterHold>
          </Nothing>
        )}
      </Body>
    </Container>
  );
};

export default UserNotify;

const Container = styled.div`
  width: calc(100%-20%);
  overflow: hidden;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    width: calc(100vw - 60px);
    height: 100vh;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
const Head = styled.div`
  width: calc(100% - 47px);
  padding-left: 23px;
  padding-right: 23px;
  height: 150px;
  background-color: #f1f1f1;
  color: #5a5a5a;
`;
const Body = styled.div`
  width: calc(100% - 47px);
  padding-left: 23px;
  padding-right: 23px;
`;
const Hold = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #383838;
  h2 {
    font-weight: 500;
    font-size: 17px;
    @media screen and (min-width: 800px) {
      font-size: 35px;
    }
  }
`;
const Nothing = styled.div`
  width: 100%;
  height: calc(100vh - 205px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterHold = styled.div`
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Pic = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 50%;
  }
`;
const Txt = styled.div`
  font-size: 14px;
  color: gray;
  font-weight: bold;
`;
const Sxt = styled.div`
  font-size: 10px;
`;
