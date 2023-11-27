import { Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";

const StyledTypoTwo = styled(Typography)({
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
});
const StyledTypoThree = styled(Typography)({
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "400",
});
const Cards = ({Detail, Header}) => {
  return (
    <Paper
      sx={{
        width:"100%",
        background: "#71bbd4",
        padding:"5% 3%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack alignItems={"center"} gap={2}>
        <StyledTypoTwo sx={{
            textAlign:"center",
        }}>{Header}</StyledTypoTwo>
        <StyledTypoThree sx={{
            textAlign:"center",
        }}>
         {Detail}
        </StyledTypoThree>
      </Stack>
    </Paper>
  );
};

export default Cards;
