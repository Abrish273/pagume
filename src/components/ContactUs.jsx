import { Stack, Typography, styled } from "@mui/material";
import React from "react";

const StyledTypo = styled(Typography)({
    fontSize: "28px",
    textAlign: "center",

});
const ContactUs = () => {
  return (
    <Stack>
      <StyledTypo sx={{
        fontWeight: "bold"
      }}>Contact US</StyledTypo>
      <StyledTypo>Paegume Amest Charity Organization</StyledTypo>
      <StyledTypo>Gerji, Addis Ababa Ethiopia</StyledTypo>
      <StyledTypo>Phone: 09-35-02-66-63</StyledTypo>
      {/* <StyledTypo>Or you can Email to Us</StyledTypo> */}
    </Stack>
  );
};

export default ContactUs;
