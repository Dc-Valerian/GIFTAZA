import axios from "axios";

const config = {
  headers: {
    "Content-Type": "Application/json",
  },
};

const URl = "https://giftcard-api.onrender.com";

export const createUser = async ({
  name,
  email,
  username,
  password,
  confirmPassword,
  phoneNumber,
}: any) => {
  return await axios
    .post(`${URl}/api/registeruser`, {
      name,
      email,
      password,
      confirmPassword,
      phoneNumber,
      username,
    })
    .then((res) => {
      return res.data;
    });
};

export const LoginBizUser = async ({ email, password }: any) => {
  return await axios
    .post(`${URl}/api/loginbusiness`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
export const LoginUser = async ({ email, password }: any) => {
  return await axios
    .post(`${URl}/api/loginuser`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};

export const getOneBiz = async ({ id }: any) => {
  return axios.get(`${URl}/api/getsinglebusiness/${id}`).then((res) => {
    return res.data;
  });
};

export const createGiftCard = async ({ colour, moneyWorth, id }: any) => {
  return axios.post(
    `${URl}/api/generateyourgiftcard/${id}`,
    {
      colour,
      moneyWorth,
    },
    config
  );
};

export const allGiftCard = async () => {
  return axios.get(`${URl}/api/getallgiftcards`);
};

export const singleBusiness = async (id: any) => {
  return await axios.get(`${URl}/api/getsinglebusiness/${id}/cards`);
};

export const singleGiftCard = async (id: any) => {
  return axios.get(`${URl}/api/businessgiftcard/${id}`);
};

export const transactionHistory = async (id: any) => {
  return axios.post(`${URl}//fundwallet/${id}`);
};
