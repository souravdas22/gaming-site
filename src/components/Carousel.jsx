import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import img1 from "../Carousel-images/Slide1.webp"
import img2 from "../Carousel-images/Slide4.webp";
import img3 from "../Carousel-images/Slide5.webp";
import img4 from "../Carousel-images/Slide6.webp";
import img5 from "../Carousel-images/Slide2.webp";
import img6 from "../Carousel-images/Slide3.webp";
import img7 from "../Carousel-images/Slide7.webp";
import img8 from "../Carousel-images/Slide8.webp";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:img1
  },
  {
    imgPath:img2
  },
  {
    imgPath:img3
  },
  {
    imgPath:img4
  },
  {
    imgPath:img5
  },
  {
    imgPath:img6
  },
  {
    imgPath:img7
  },
  {
    imgPath:img8
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1,overflowX:"hidden" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index} style={{overflow:"hidden"}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "100vh",
                  display: "block",
                  maxWidth: "100%",
                  objectFit: "cover",
                  width: "100%",
                  transition: "transform 9s ease",
                  transform: `scale(${index === activeStep ? 1.2 : 1})`,
                  
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
