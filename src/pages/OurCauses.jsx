import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import Help from "../components/Help";
import MainCause from "../components/MainCause";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  textAlign: "center",
  padding: "0px 10%",
  fontSize: "20px",
});
const OurCauses = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <Stack gap={4}>
      <MainCause />
      <StyledTypo>{content.CauseM}</StyledTypo>
      <Stack
        sx={{
          padding: "0px 10%",
        }}
      >
        <ul>
          <li>{content.Bullet}</li>
          <li>{content.BulletOne}</li>
          <li>{content.BulletTwo}</li>
          <li>{content.BulletThree}</li>
          <li>{content.BulletFour}</li>
          {content.BulletFive && <li>{content.BulletFive}</li>}
        </ul>
      </Stack>
      <Help />
    </Stack>
  );
};

export default OurCauses;
