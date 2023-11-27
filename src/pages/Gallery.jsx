import React from "react";
import { Stack } from "@mui/material";
import Gallerys from "../components/Gallery";

const Gallery = () => {
  return (
    <Stack sx={{
        margin:"20px 0px"
    }}>
      <Gallerys />
    </Stack>
  );
};

export default Gallery;
