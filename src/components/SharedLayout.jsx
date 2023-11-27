import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguage, setLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const SharedLayout = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <Stack position={"relative"}>
      <Header />
      <Nav />
      <Stack>
        <Outlet />
      </Stack>
      <Stack
        position={"fixed"}
        sx={{
          top: "75%",
          left: "2%",
          zIndex: 1,
          boxShadow: "1px 4px 8px 5px gray",
        }}
      >
        <select
          value={language}
          onChange={(e) => dispatch(setLanguage(e.target.value))}
          style={{
            padding:"5px",
          }}
        >
          <option value="english">English</option>
          <option value="amharic">Amharic</option>{" "}
        </select>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
