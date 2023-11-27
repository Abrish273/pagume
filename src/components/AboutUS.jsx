import { ImageList, ImageListItem, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Logo from "../images/logo.png";
import ElderThree from "../images/elders3.jpg";
import ElderTwo from "../images/elders2.jpg";
import ElderOne from "../images/elders.jpg";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  textAlign: "center",
  padding: "0px 10%",
});

const elders = [
  // { id: 1, src: ElderOne, width: 40, height: 40 },
  { id: 2, src: ElderTwo, width: 200, height: 200 },
  { id: 3, src: ElderThree, width: 200, height: 200 },
];
const AboutUS = () => {
  // const dispatch = useDispatch()
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <Stack alignItems={"center"} gap={4}>
      <img src={Logo} alt="logo" />
      <ImageList sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      {elders.map((elder) => (
        <ImageListItem key={elder.id}>
          <img
            src={elder.src}
            alt={`elder-${elder.id}`}
            style={{
              borderRadius: '50%',
              width: `${elder.width}px`,
              height: `${elder.height}px`,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
      <StyledTypo
        sx={{
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        {content.Logo}
      </StyledTypo>
      <StyledTypo>
        <b>{content.Pagume}</b>
        {content.PagumeOne} <b>{content.Pagume}</b>
        {content.PagumeTwo}
      </StyledTypo>
      <StyledTypo
        sx={{
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {content.Title}
      </StyledTypo>
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
      <StyledTypo>{content.Para}</StyledTypo>
      <StyledTypo>{content.ParaOne}</StyledTypo>
    </Stack>
  );
};

export default AboutUS;
