import { Box, Button, Stack, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import {
  MailOutline,
  LocalPhone,
  Facebook,
  YouTube,
  Telegram,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledIcon = styled(Stack)({
  transform: "scale(1.1)",
  transition: "transform 0.3s ease-in-out",
  background:"#ffffff",
  padding:"3px",
  borderRadius: "13px",
  alignItems: "center",
  "&:hover": {
    transform: "scale(1.2)",
    cursor: "pointer",
  },
});
const Header = () => {
  // const dispatch = useDispatch()
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Stack
      sx={{
        backgroundColor: "pagumeColor.main",
        display: {sm:"none", md:"flex", xs:"none"}
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "100%",
          backgroundColor: "pagumeColor.main",
          padding: "10px 10px",
          paddingRight: "40px",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <LocalPhone sx={{ color: "pagumeColor.white" }} />
            <Typography sx={{ color: "pagumeColor.white" }}>
              Tel:301-814-4883
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <MailOutline sx={{ color: "pagumeColor.white" }} />
            <Typography sx={{ color: "pagumeColor.white" }}>
              Tel:301-814-4883
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <StyledIcon>
              <Facebook sx={{ color: "#000000" }} />
            </StyledIcon>
            <StyledIcon>
              <YouTube sx={{ color: "#000000" }} />
            </StyledIcon>
            <StyledIcon>
              <Telegram sx={{ color: "#000000" }} />
            </StyledIcon>
          </Stack>
          <Button
            variant="outlined"
            sx={{
              color: "pagumeColor.white",
              borderColor: "pagumeColor.white",
            }}
          >
            {content.Donate}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
