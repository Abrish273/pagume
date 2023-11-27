import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ElderThree from "../images/elders3.jpg";
import { Diversity1, Favorite } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#e1ce0b",
  fontSize: "64px",
  fontWeight: "600",
});

const StyledTypoTwo = styled(Typography)({
  color: "#00000",
  fontSize: "24px",
  fontWeight: "600",
});
const StyledTypoThree = styled(Typography)({
  color: "#00000",
  fontSize: "18px",
  fontWeight: "400",
});

const Below = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  const [total, setTotal] = useState(0);
  let elders = 3000;
  let bed = 200;
  let mentally = 100;
  let visually = 20;

  useEffect(() => {
    // Calculate the total sum of StyledTypo values

    const totalSum = elders + bed + mentally + visually;
    setTotal(totalSum);
  }, [content]);

  return (
    <Paper>
      <Stack direction={{md:"row", sm:"column"}} alignItems={"center"} justifyContent={"center"}>
        <Stack flex={0.5} alignItems={{sm:"center", xs:"center"}} width={{sm:"60%", xs:"50%"}}>
          <img src={ElderThree} alt="elderly" width="70%" />
        </Stack>
        <Stack flex={0.4} sx={{ width: "80%" }} gap={2}>
          <StyledTypo sx={{
            fontSize:{sm:"48px", xs:"32px"},
            textAlign: {sm:"center", xs:"center"}
          }}>{content.BelowM}</StyledTypo>
          <StyledTypoThree>{content.Below}</StyledTypoThree>
          <Stack direction={"row"} gap={1}>
            <Stack flex={0.5}>
              <Diversity1
                sx={{
                  color: "#e1ce0b",
                }}
              />
              <StyledTypoTwo>{content.Love}</StyledTypoTwo>
              <StyledTypoThree>{content.LoveD}</StyledTypoThree>
            </Stack>
            <Stack flex={0.5}>
              <Favorite
                sx={{
                  color: "#e1ce0b",
                }}
              />
              <StyledTypoTwo>{content.Med}</StyledTypoTwo>
              <StyledTypoThree>{content.MedD}</StyledTypoThree>
            </Stack>
          </Stack>
          <Stack alignItems={"flex-start"}>
            <Button
              sx={{
                background: "#e1ce0b",
                color: "#fff",
                width:{sm:"100%"}
              }}
            >
              {content.Explore}
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Paper>
        <Stack
          direction={{md:"row", sm:"column"}}
          justifyContent={"center"}
          gap={3}
          sx={{
           paddingBottom: {md:"30px", sm:"20px"},
           paddingTop: { sm:"20px"},
          }}
        >
          <Stack alignItems={"center"}>
            <StyledTypo>{elders}</StyledTypo>
            <Typography>{content.Elders}</Typography>
          </Stack>
          <Divider />
          <Stack alignItems={"center"}>
            <StyledTypo>{bed}</StyledTypo>
            <Typography>{content.Bed}</Typography>
          </Stack>
          <Divider color="blue" />
          <Stack alignItems={"center"}>
            <StyledTypo>{mentally}</StyledTypo>
            <Typography>{content.Mentally}</Typography>
          </Stack>
          <Divider color="blue" />
          <Stack alignItems={"center"}>
            <StyledTypo>{visually}</StyledTypo>
            <Typography>{content.Visually}</Typography>
            <Divider />
          </Stack>
          <Divider color="blue" />
          <Stack alignItems={"center"}>
            <StyledTypo>{total}</StyledTypo>
            <Typography>{content.Total}</Typography>
            <Divider />
          </Stack>
        </Stack>
      </Paper>
    </Paper>
  );
};

export default Below;
