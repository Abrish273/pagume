import { Paper, Stack } from "@mui/material";
import React from "react";
import Elder from "../images/elders4.jpg";
import JoinCard from "./JoinCard";

const JoinUS = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} gap={{ md: 2 }}>
      <Paper
        sx={{
          flexGrow: "1",
        }}
      >
        <JoinCard />
      </Paper>
      <Stack
        sx={{
          display: { md: "flex", sm: "none", xs:"none" },
          width: { md: "40%" },
        }}
      >
        <img src={Elder} height="590px" alt="elder" />
      </Stack>
    </Stack>
  );
};

export default JoinUS;
