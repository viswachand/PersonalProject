import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224930190-JVHCUYF68IR9A4TWEVRK/ke17ZwdGBToddI8pDm48kNbLqx_FIYjfhtEsCHEHzad7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UX_hdIVndeO72MD00jTnc1n42Pd5vs4VrV4yXG_EV_fzwRAeN1AbZG4OR41R6pDVyg/SJR_Parita+Deepanshu_DC00594.jpg?format=2500w",
  },
  {
    imgPath:
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224979334-N2KOESD166NYYRPKXF1F/ke17ZwdGBToddI8pDm48kIAxOFyGQR3Lx89o4DH4kswUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKccVw9oYjzdNAKyl2nw8EiYA_-bZsoRUccscCSfUNpRoZj40r_Ofp3h0Jx3uVLEzNf/JRS_GV_001052.jpg?format=2500w",
  },
  {
    imgPath:
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224996102-V6A334H2M8TYRZ1W6KL0/ke17ZwdGBToddI8pDm48kFqhRigkcIARhG8omTxzqWx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT7BikgYHtwumAG5ZZi9jNbd5NjAAdBI4SavFr3qBNfwj_iNKj9Z_hHyhQXmsTN3cQ/DA_Prev_0159.jpg?format=2500w",
  },
  {
    imgPath:
'https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224613955-MAXD4YS5OZSCWOGUQ6VH/ke17ZwdGBToddI8pDm48kFACATKTWhm1CAVr6STUk9p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua40xd4l56mUpnBL2gQiZfBVwGCGZ2r8DIOPNwM0zfoVISvQmwN60hB-jM3cH1Ew2w/Brij+holi%2C+Mumbai+A7s.jpg?format=2500w'
  },
  {
    imgPath:
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486225213629-OHH7LLE2EPROFLMU4IJO/ke17ZwdGBToddI8pDm48kApm4bZ6Mn3TiUWou3kA3bp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZaykogqWzieOupsqeSuBYug-y5Ut2InYZT1FrJD3yL-rj95DA1mjJIBxXFGHkuyQ/SJR_Rishabh+%2B+Sanjana-+Youngsters_3697.jpg?format=2500w",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },

  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    minHeight: "80%",
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
