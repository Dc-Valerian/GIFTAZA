import styled from "styled-components";
import AllGiftCard from "./AllGiftCard";

const Section = styled.section`
  overflow: hidden;
  background: url(${`https://media.istockphoto.com/id/1460983528/vector/gift-card-discount-voucher-red-blue-coupon-paper-vector-invitation-giftcard-certificate.jpg?s=612x612&w=0&k=20&c=0uIOhxubpUpKeJbXh2Qc7C2FE3cdP-dlvzf4X0YCSOY=`});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 40px;

  & .inner {
    background-color: rgba(0, 0, 0, 0.25);
    padding: 2rem;

    @media (min-width: 768px) {
      padding: 3rem;
    }

    @media (min-width: 1024px) {
      padding: 4rem 6rem;
    }

    @media (min-width: 1280px) {
      padding: 6rem 8rem;
    }

    text-align: center;

    @media (min-width: 640px) {
      text-align: left;
    }
  }

  & h2 {
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;

    @media (min-width: 640px) {
      font-size: 1.5rem;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 45px;
    }
  }

  & p {
    display: none;
    max-width: 70%;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 1.5rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      display: block;
      margin-top: 1rem;
      font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
      font-size: 23px;
    }
  }

  & a {
    display: inline-block;
    border-radius: 9999px;
    background-color: #8a2be2;
    padding: 0.75rem 3rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: #ffffff;
    transition: background-color 0.3s, box-shadow 0.3s;
    margin-top: 1rem;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #8a2be2;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.5);
    }

    @media (min-width: 768px) {
      margin-top: 2rem;
      font-size: 1rem;
      padding: 1rem 4rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
`;

const GiftCard = () => {
  return (
    <div>
      <Section>
        <div className="inner">
          <h2>Get Someone a GiftCard or Purchase One for yourself</h2>
          <p>
            Yet another giving occasion that comes every year! Gift cards at
            Christmas are a great way to take the stress off when you've got a
            big list to shop for…or just people who are hard to shop for.
          </p>
          <a href="/get-started" style={{ textDecoration: "none" }}>
            Get Yours Today
          </a>
        </div>
      </Section>
      <AllGiftCard />
    </div>
  );
};

export default GiftCard;
