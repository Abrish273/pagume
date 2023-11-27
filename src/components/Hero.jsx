import React from "react";
import Background from "./Background";
import { Button, Stack, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#fff",
  fontSize: "48px",
  fontWeight: "600",
});
const Hero = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <Stack
      sx={{
        position: "relative",
      }}
    >
      <Background />
      <Stack
        gap={2}
        alignItems={"flex-start"}
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
        }}
      >
        <StyledTypo sx={{
          fontSize: {xs:"18px", md:"38px"}
        }}>{content.Support}</StyledTypo>
        <StyledTypo
          sx={{
            fontSize: { md: "24px", xs: "14px" },
            fontWeight: "300",
          }}
        >
          {content.SupportP}
        </StyledTypo>
        <Button
          variant="contained"
          sx={{
            background: "#ed3604",
            
          }}
        >
          {content.Story}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
