import React, { useEffect, useRef } from "react";
import { Paper, Stack, Typography, styled } from "@mui/material";
import ElderThree from "../images/guest.png";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";

const StyledTypo = styled(Typography)({
  color: "#e1ce0b",
  fontSize: "40px",
  fontWeight: "400",
});
const Message = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  const videoId = "vff5RdvqDxg";
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    const scrollStep = 2; // Adjust this value to control the scroll speed
    const scrollInterval = 3000; // Adjust this value to set the time gap between scrolls

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;
      }
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Stack
      sx={{
        paddingLeft: "10%",
        marginTop: "5%",
      }}
    >
      <Stack alignItems={"flex-start"} gap={3}>
        <StyledTypo>{content.Message}</StyledTypo>
        <Paper
          sx={{
            width: "100%",
            boxshadow: "4px 4px 8px #333",
            padding: "15px",
          }}
        >
          <Stack direction={{ md: "row", sm: "column" }} gap={1}>
            <Stack alignItems={"flex-start"} gap={1} direction={{md:"column", sm:"row", xs:"row"}}>
              <img
                src={ElderThree}
                alt="guest"
                style={{
                  borderRadius: "10px",
                }}
                width="100px"
              />
              <Stack>
                <Typography
                  sx={{
                    color: "#7a997b",
                  }}
                >
                  Pagume 5 is an institution that gathers and helps those who
                  have lost their loved ones, those who have been forgotten,
                  those who have no side, and those who have fallen by the
                  wayside. When I saw this, I really saw that there are people
                  who do good and feel humane in our country. EBC will continue
                  to support itself by making high-budget commercials, and
                  documentaries for free
                </Typography>
                <Stack direction={"row"}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    DOCTOR NIGUSSE MITIKU,
                  </Typography>
                  <Typography
                    sx={{
                      color: "#7a997b",
                    }}
                  >
                    {" "}
                    ETHIOPIAN BROADCASTING CORPORATION CEO
                  </Typography>
                </Stack>
                <Stack direction={"row"}>
                  <StarIcon
                    sx={{
                      color: "yellow",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "yellow",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "yellow",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "yellow",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "yellow",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack sx={{
              width:{xs:"100%", sm:"100%", md:"100%"},
              // height:{xs:"80%", sm:"100%", md:"80%"}
            }}>
              <iframe
                // width="460"
                height="280"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Message;
