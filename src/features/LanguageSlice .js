import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "english", // Default language
};

const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = LanguageSlice.actions;
export const selectLanguage = (state) => state.language.language;

export default LanguageSlice.reducer;
