import React from "react";
import { Button, Stack, Typography, styled } from "@mui/material";
import Elder from "../images/elders.jpg";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#ffffff",
  fontSize: "40px",
  fontWeight: "400",
  textAlign: "center",
});
const ShadedBackground = styled(Stack)({
  position: "relative",
  height: " 600px" /* Adjust the height as needed */,
  backgroundImage: `url(${Elder})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  backgroundcolor: "rgba(255, 0.7, 0.7)",
});

const TextContainer = styled("div")({
  padding: "6%",
  zIndex: 1,
});

const Help = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <ShadedBackground>
      <TextContainer
        sx={{
          backgroundColor: "rgba(255, 0, 0, 0.7)", // Fix typo here
        }}
      >
        <StyledTypo variant="h4">{content.Cause}</StyledTypo>
        <StyledTypo
          sx={{
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          {content.CauseD}
        </StyledTypo>
        <StyledTypo> “ሰውን ለመርዳት ሰው መሆን በቂ ነው!”</StyledTypo>
        <Button
          variant="contained"
          sx={{
            color: "pagumeColor.white",
            // borderColor: "primary",
          }}
        >
          {content.Donate}
        </Button>
      </TextContainer>
    </ShadedBackground>
  );
};

export default Help;
