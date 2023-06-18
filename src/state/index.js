import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: {},
  prompt: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
  },
});

export const { setMode, setUser, setPrompt } = globalSlice.actions;
export default globalSlice.reducer;
