import { Stack } from "@mui/material";
import React from "react";
import Follow from "../components/Follow";
import ContactUs from "../components/ContactUs";
import JoinUS from "../components/JoinUS";

const ContactUS = () => {
  return (
    <Stack gap={2}>
      <Follow />
      <JoinUS />
      <ContactUs />
    </Stack>
  );
};

export default ContactUS;
