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
      <Stack alignItems={"center"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.3473143223448!2d38.80519431508708!3d9.000220998466384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8524eb642f95%3A0xc92e66c885f6b6da!2z4Ymm4YiMIOGKreGNjeGIiCDhiqjhibDhiJssIOGKoOGLsuGItSDhiqDhiaDhiaM!5e0!3m2!1sam!2set!4v1701151911581!5m2!1sam!2set"
          style={{ width:"100%", height: "500px", border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="google maps pagume location"
        ></iframe>
      </Stack>
    </Stack>
  );
};

export default ContactUS;
