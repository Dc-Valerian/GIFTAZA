import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { BusinessData, UserDetails, CardData } from "../API/Allinterface";

const initialState = {
  bizClient: {} as BusinessData | null,
  DataCard: {} as CardData | null,
  userData: {} as UserDetails | null,
  verified: false as boolean | null,
  toggle: false,
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
    creatingCard: (state, { payload }: PayloadAction<CardData>) => {
      state.DataCard = payload;
    },
    changeToggleTrue: (state: any) => {
      state.toggle = true;
    },
    changeToggleFalse: (state: any) => {
      state.toggle = false;
    },
    access: (state, { payload }: PayloadAction<boolean | null>) => {
      state.verified = payload;
    },
  },
});

export const dummy_user: any = { name: "Andrea", role: "admin" };

export const {
  login,
  logout,
  creatingCard,
  Userlogin,
  Userlogout,
  access,
  changeToggleFalse,
  changeToggleTrue,
} = ReduxState.actions;

export default ReduxState.reducer;
