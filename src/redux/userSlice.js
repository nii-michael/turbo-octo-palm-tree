import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  region: "",
  name: "",
  accces_token: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserAcessToken: (state, action) => {
      state.accces_token = action.payload;
    },
    setAccountUsername: (state, action) => {
      state.username = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setName,
  setRegion,
  setUserEmail,
  setUserAcessToken,
  setAccountUsername
} = userSlice.actions;

export default userSlice.reducer;
