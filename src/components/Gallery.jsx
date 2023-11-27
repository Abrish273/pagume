import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/LanguageSlice ";
import Translation from "../Translation/Data.json";
import Elder from "../images/elders.jpg";
import ElderTwo from "../images/elders2.jpg";
import ElderThree from "../images/elders3.jpg";
import ElderFour from "../images/elders4.jpg";

const StyledTypo = styled(Typography)({
  color: "#e1ce0b",
  fontSize: "48px",
  fontWeight: "600",
});

const itemData = [
  { img: Elder, title: "Elder 1", author: "Author 1" },
  { img: ElderTwo, title: "Elder 2", author: "Author 2" },
  { img: Elder, title: "Elder 1", author: "Author 1" },
  { img: ElderTwo, title: "Elder 2", author: "Author 2" },
  { img: ElderThree, title: "Elder 3", author: "Author 3" },
  { img: ElderFour, title: "Elder 4", author: "Author 4" },
  { img: ElderThree, title: "Elder 3", author: "Author 3" },
  { img: ElderFour, title: "Elder 4", author: "Author 4" },
  // Add more items as needed
];
const Gallery = () => {
  const language = useSelector(selectLanguage);
  const content = Translation[language];
  return (
    <Stack alignItems={"center"} gap={4}>
      <StyledTypo>{content.Gallery}</StyledTypo>
      {/* <Stack gap={1}>
        <Stack direction={"row"} gap={1}>
          <img
            // width={"calc(100% - 5px)"}
            height={"260px"}
            src={Elder}
            alt="elder"
          />
          <img
            // width={"calc(100% - 50px)"}
            height={"260px"}
            src={ElderTwo}
            alt="elder"
          />
          <img
            // width={"calc(100% - 50px)"}
            height={"260px"}
            src={ElderFour}
            alt="elder"
          />
        </Stack>
        <Stack direction={"row"} gap={1}>
          <img
            // width={"calc(100% - 50px)"}
            height={"260px"}
            src={ElderThree}
            alt="elder"
          />
          <img
            // width={"calc(100% - 50px)"}
            height={"260px"}
            src={Elder}
            alt="elder"
          />
          <img
            // width={"calc(100% - 50px)"}
            height={"260px"}
            src={Elder}
            alt="elder"
          />
        </Stack>
      </Stack> */}
      <Stack justifyContent={"center"}>
        <Grid container spacing={1}>
          {/* <Grid item xs={4} md={4}>
          <img
            sx={{ objectFit: "cover", height: { md: "200px" } }}
            // width={"250px"}
            height={"260px"}
            src={Elder}
            alt="elder"
          />
        </Grid> */}
          <ImageList sx={{ width: "100%", height: 550 }} cols={3} rowHeight={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ed3604",
        }}
      >
        {content.Discover}
      </Button>
    </Stack>
  );
};

export default Gallery;
