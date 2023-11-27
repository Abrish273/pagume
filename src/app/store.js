import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "../features/LanguageSlice ";

const store = configureStore({
  reducer: {
    language: LanguageReducer,
  },
});

export default store;
