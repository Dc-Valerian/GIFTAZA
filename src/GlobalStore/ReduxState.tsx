import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { BusinessData, UserDetails, cardData } from "../API/Allinterface";

const initialState = {
  bizClient: {} as BusinessData | null,
  DataCard: {} as cardData | null,
  userData: {} as UserDetails | null,
  //   Admin: {} as BusinessData | null,
};

const ReduxState = createSlice({
  name: "GiftCard",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<BusinessData>) => {
      state.bizClient = payload;
    },
    Userlogin: (state, { payload }: PayloadAction<UserDetails>) => {
      state.userData = payload;
    },

    logout: (state) => {
      state.bizClient = null;
    },

    Userlogout: (state) => {
      state.userData = null;
    },
    creatingCard: (state, { payload }: PayloadAction<cardData>) => {
      state.DataCard = payload;
    },
  },
});

export const dummy_user: any = { name: "Andrea", role: "admin" };

export const { login, logout, creatingCard, Userlogin, Userlogout } =
  ReduxState.actions;

export default ReduxState.reducer;
