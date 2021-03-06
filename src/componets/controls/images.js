import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    
    imgPath:
      'https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224920312-8BTPT9FKBINDZ6KR7BNP/ke17ZwdGBToddI8pDm48kNbLqx_FIYjfhtEsCHEHzad7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UX_hdIVndeO72MD00jTnc1n42Pd5vs4VrV4yXG_EV_fzwRAeN1AbZG4OR41R6pDVyg/HD_DC_SBJR-114.jpg?format=2500w',
  },
  {
   
    imgPath:
      'https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224930383-1IDQHSVC3BHYKYUWRFCQ/ke17ZwdGBToddI8pDm48kAhXNdnk1J1zhaSdx9T1iaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQLOTisUX_0ILn1FY0p9V39_iXcL1FAtKyIy6IfCS_9-O-MvQYMkq_5ZT-EGTUzuew/SJR_roshipoo_Dc00310-Edit.jpg?format=2500w',
  },
  {
  
    imgPath:
      'https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224996102-V6A334H2M8TYRZ1W6KL0/ke17ZwdGBToddI8pDm48kFqhRigkcIARhG8omTxzqWx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT7BikgYHtwumAG5ZZi9jNbd5NjAAdBI4SavFr3qBNfwj_iNKj9Z_hHyhQXmsTN3cQ/DA_Prev_0159.jpg?format=2500w',
  },
  {
    
    imgPath:
      'https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486225001203-XETHNUKXUBW1R3WBSU6N/ke17ZwdGBToddI8pDm48kLNngEmK1Suj_YKZff0BhGh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaXukDAY33Cmv9FDsBgcb9582pK50L9PA_1NZFRpMYPW5ck0MD3_q0rY3jFJjjoLbQ/DA_Prev_0169.jpg?format=2500w',
  },
  {

    imgPath:
      'https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224581777-VS1L3RYSKWZ5JIL1AI5C/ke17ZwdGBToddI8pDm48kD5eUl-FDXk5mOiV9b_Vaup7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaSb-Yb1SS-4DT3F7EbWbbDaOO0WAf44xQE3lECOCQvdzrD36oouzk3SSBf3bbVhnA/RS_0025A.JPG?format=2500w',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    
  },
  
  img: {
   
    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    minHeight:'80%',
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
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
