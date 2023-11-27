import axios from "axios";

const config = {
  headers: {
    "Content-Type": "Application/json",
  },
};

const URl = "https://giftcard-api.onrender.com";

const newurl = "https://giftaza.onrender.com/";

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
