import {
  AppBar,
  Box,
  Drawer,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";
import { Menu } from "@mui/icons-material";

const Nav = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const content = Translation[language];

  //drawer start
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        gap={2}
        sx={{
          padding: "10px",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              borderRadius: "5px",
              padding: "10px",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#ffffff" : "#000000",
              textDecoration: "none",
              background: isActive ? "#ed3604" : "none",
            };
          }}
        >
          {content.Home}
        </NavLink>
        <NavLink
          to="/aboutus"
          style={({ isActive }) => {
            return {};
          }}
        >
          {content.About}
        </NavLink>
        <NavLink
          to="/contactus"
          style={({ isActive }) => {
            return {};
          }}
        >
          {content.Contact}
        </NavLink>
        <NavLink
          to="/gallery"
          style={({ isActive }) => {
            return {};
          }}
        >
          {content.Gallery}
        </NavLink>
        <NavLink
          to="/ourcauses"
          style={({ isActive }) => {
            return {};
          }}
        >
          {content.Causes}
        </NavLink>
      </Stack>
    </Box>
  );
  //drawer end

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "pagumeColor.white",
        top: "0px",
        left: "0px",
        zIndex: 999,
      }}
    >
      <Toolbar>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            width: "100%",
          }}
        >
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <img src={Logo} alt="logo" width="50px" />
            <Typography
              color="pagumeColor.black"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {content.Logo}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            sx={{
              display: { sm: "none", md: "flex", xs: "none" },
            }}
          >
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#ed3604" : "#000000",
                  textDecoration: "none",
                  borderBottom: isActive ? "3px solid #ed3604" : "none",
                };
              }}
            >
              {content.Home}
            </NavLink>
            <NavLink
              to="/aboutus"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#ed3604" : "#000000",
                  textDecoration: "none",
                  borderBottom: isActive ? "3px solid #ed3604" : "none",
                };
              }}
            >
              {content.About}
            </NavLink>
            <NavLink
              to="/contactus"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#ed3604" : "#000000",
                  textDecoration: "none",
                  borderBottom: isActive ? "3px solid #ed3604" : "none",
                };
              }}
            >
              {content.Contact}
            </NavLink>
            <NavLink
              to="/gallery"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#ed3604" : "#000000",
                  textDecoration: "none",
                  borderBottom: isActive ? "3px solid #ed3604" : "none",
                };
              }}
            >
              {content.Gallery}
            </NavLink>
            <NavLink
              to="/ourcauses"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#ed3604" : "#000000",
                  textDecoration: "none",
                  borderBottom: isActive ? "3px solid #ed3604" : "none",
                };
              }}
            >
              {content.Causes}
            </NavLink>
          </Stack>
          <Stack sx={{
            display: { md: "none", sm: "flex" },
          }}>
            <Menu
              onClick={toggleDrawer("right", true)}
              sx={{
                color: "#000000",
                display: { md: "none", sm: "flex" },
              }}
            />
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
