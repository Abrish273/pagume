import { Button, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#e1ce0b",
  fontSize: "48px",
  fontWeight: "600",
});

const StyledTypoThree = styled(Typography)({
  color: "#00000",
  fontSize: "20px",
  fontWeight: "400",
});
const OurNeeds = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <Paper
      sx={{
        marginTop: "30px",
        boxShadow: "none",
      }}
    >
      <Stack
        sx={{
          padding: "7% 10%",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <StyledTypoThree
          sx={{
            textAlign: "center",
          }}
        >
          {content.Needs}
        </StyledTypoThree>
        <StyledTypo
          sx={{
            textAlign: "center",
          }}
        >
          {content.Add}
        </StyledTypo>
        {/* <Stack direction={"row"} gap={3}>
          <Cards Header={content.Con} Detail={content.ConD} />
          <Cards Header={content.Awaqi} Detail={content.AwaqiD} />
          <Cards Header={content.Chair} Detail={content.ChairD} />
          <Cards Header={content.Addis} Detail={content.AddisD} />
        </Stack> */}
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Cards Header={content.Con} Detail={content.ConD} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Cards Header={content.Awaqi} Detail={content.AwaqiD} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Cards Header={content.Chair} Detail={content.ChairD} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Cards Header={content.Addis} Detail={content.AddisD} />
          </Grid>
        </Grid>
        <Stack width="100%">
          <Button variant="outlined" size="large">
            {content.Eqa}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default OurNeeds;
