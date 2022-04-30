import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  region: "",
  name: "",
  access_token: "",
  userId: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.name = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    setAccountUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setFullName,
  setRegion,
  setUserEmail,
  setUserAccessToken,
  setAccountUsername,
  setUserId
} = userSlice.actions;

export default userSlice.reducer;
