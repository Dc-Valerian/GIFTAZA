import axios from "axios";

const config = {
  headers: {
    "Content-Type": "Application/json",
  },
};

export const newurl = "https://giftaza.onrender.com";

// register User
export const RegisterBusiness = async (user: any) => {
  return axios
    .post(`${newurl}/api/registerbusiness`, user)
    .then((res) => res.data);
};

// login User
export const LoginBusiness = async (user: any) => {
  return axios
    .post(`${newurl}/api/loginbusiness`, user)
    .then((res) => res.data.data);
};

// User OTP Verification
export const BusinessVerification = async (OTP: string) => {
  return axios
    .post(`${newurl}/api/verifybusiness`, { OTP })
    .then((res) => res.data.data);
};

export const getOneBiz = async ({ id }: any) => {
  return axios.get(`${newurl}/api/getsinglebusiness/${id}`).then((res) => {
    return res.data;
  });
};

export const createGiftCard = async ({ colour, moneyWorth, id }: any) => {
  return axios.post(
    `${newurl}/api/generateyourgiftcard/${id}`,
    {
      colour,
      moneyWorth,
    },
    config
  );
};

export const allGiftCard = async () => {
  return axios.get(`${newurl}/api/getallgiftcards`);
};

export const singleBusiness = async (id: any) => {
  return await axios.get(`${newurl}/api/getsinglebusiness/${id}/cards`);
};

export const singleGiftCard = async (id: any) => {
  return axios.get(`${newurl}/api/businessgiftcard/${id}`);
};

export const transactionHistory = async (id: any) => {
  return axios.post(`${newurl}/fundwallet/${id}`);
};
