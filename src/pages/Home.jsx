import React from "react";
import { Stack } from "@mui/material";
import Hero from "../components/Hero";
import Below from "../components/Below";
import OurNeeds from "../components/OurNeeds";
import Gallery from "../components/Gallery";
import Message from "../components/Message";
import Follow from "../components/Follow";
import JoinUS from "../components/JoinUS";
import Help from "../components/Help";

const Home = () => {
  return (
    <Stack gap={2}>
      <Hero />
      <Below />
      <OurNeeds />
      <Gallery />
      <Message />
      <Follow />
      <JoinUS />
      <Help />
    </Stack>
  );
};

export default Home;
