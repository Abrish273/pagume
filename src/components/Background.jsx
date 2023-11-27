import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";

import Elder from "../images/elders.jpg";
import ElderTwo from "../images/elders2.jpg";

const HorizontalImageScroll = () => {
  const imageUrls = [Elder, ElderTwo, Elder, ElderTwo];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Increment the index to move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change the timeout duration (in milliseconds) as needed

    return () => clearTimeout(timeoutId);
  }, [currentIndex, imageUrls.length]);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(${-currentIndex * 100}%)`,
          // height: `calc(100% - 31%)`
        }}
      >
        {imageUrls.map((image, index) => (
          <Paper key={index} elevation={3} style={{ flex: "0 0 100%" }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: `calc(100% - 21%)`, objectFit: "cover" }}
            />
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default HorizontalImageScroll;
