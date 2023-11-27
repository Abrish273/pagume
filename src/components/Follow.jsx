import { Facebook, Telegram, YouTube } from "@mui/icons-material";
import { Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#e1ce0b",
  fontSize: "40px",
  fontWeight: "400",
});
const StyledIcon = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: "50px",
  height: "50px",

  transform: "scale(1.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
    cursor: "pointer",
  },
});
const Follow = () => {
    const language = useSelector(selectLanguage);
    const content = Translation[language];
  return (
    <Paper
      sx={{
        paddingTop: "20px",
      }}
    >
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <StyledTypo sx={{ textAlign: "center" }}>
          {content.Follow}
        </StyledTypo>
        <Stack direction={"row"} gap={4}>
          <Stack alignItems={"center"} gap={2}>
            <StyledIcon sx={{ background: "blue" }}>
              <Facebook
                sx={{
                  color: "pagumeColor.white",
                }}
              />
            </StyledIcon>
            <Typography>Facebook</Typography>
          </Stack>
          <Stack alignItems={"center"} gap={2}>
            <StyledIcon
              sx={{ background: "pagumeColor.white", border: "1px solid red" }}
            >
              <YouTube
                sx={{
                  color: "red",
                }}
              />
            </StyledIcon>
            <Typography>Youtube</Typography>
          </Stack>
          <Stack alignItems={"center"} gap={2}>
            <StyledIcon
              sx={{ background: "pagumeColor.white", border: "1px solid blue" }}
            >
              <Telegram
                sx={{
                  color: "blue",
                }}
              />
            </StyledIcon>
            <Typography>Telegram</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Follow;
