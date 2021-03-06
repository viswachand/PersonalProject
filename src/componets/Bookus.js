// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import { makeStyles } from "@material-ui/core";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import { Grid } from "@material-ui/core";
// import Controls from "../componets/controls/controls";
// import SwipeableTextMobileStepper from "../componets/controls/images";
// import GridList from "@material-ui/core/GridList";
// import TextField from "@material-ui/core/TextField";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import Radio from "./controls/RadioGroup";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import Date from "./controls/DatePicker";
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   toolbarmargin: {
//     ...theme.mixins.toolbar,
//   },
//   container: {
//     //   Color:"red",
//     //   width:"50%",
//     //   margin:"0px 118.66px 0px 118.66px",
//   },

//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 500,
//     },
//   },
//   root1: {
//     "& .MuiTextField-root": {
//       width: 500,
//     },
//   },
//   inputRoot: {
//     fontSize: 20,
//   },
//   labelRoot: {
//     fontSize: 18,
//     "&$labelFocused": {
//       color: "purple",
//     },
//   },
// }));

// export default function ElevateAppBar(props) {
//   const { color, children, onClick } = props;
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       {/* <container className={classes.container}>

//         </container>
//       <div className={classes.toolbarmargin} />
//       <Grid container direction="row" justify="center" alignItems="center" >
//         <Typography >Be the star in your own story</Typography>
//       </Grid> */}
//       <CssBaseline />
//       <div className={classes.toolbarmargin} />
//       <Container maxWidth="md">
//         <div>
//           <Typography
//             variant="h4"
//             style={{
//               fontFamily: "Shippori Mincho",
//               marginTop: 50,
//               marginBottom: 30,
//             }}
//           >
//             Be the star in your own story
//           </Typography>
//         </div>
//         <hr style={{ opacity: "0.4" }} />
//         <div>
//           <Typography
//             variant="h6"
//             style={{
//               fontFamily: "Shippori Mincho",
//               marginTop: 50,
//               marginBottom: 30,
//             }}
//           >
//             Hello, from Stories by Viswachand! <br /> This This form will take
//             you under two minutes to fill in (yes, we timed it).
//             <br />
//             <br />
//             Tell us about yourself and your event, and we'll get back to you
//             shortly :)
//           </Typography>
//         </div>
//         <hr style={{ opacity: "0.4" }} />
//         <Typography variant="h4">Tell us about yourself</Typography>
//         <div>
//           <form className={classes.root} noValidate autoComplete="off">
//             <div>
//               <TextField
//                 id="filled-error-helper-text"
//                 label="Name*"
//                 InputProps={{ classes: { root: classes.inputRoot } }}
//                 InputLabelProps={{
//                   classes: {
//                     root: classes.labelRoot,
//                     focused: classes.labelFocused,
//                   },
//                 }}
//                 // helperText="Incorrect entry."
//               />
//               <TextField
//                 id="filled-error-helper-text"
//                 label="Email*"
//                 InputProps={{ classes: { root: classes.inputRoot } }}
//                 InputLabelProps={{
//                   classes: {
//                     root: classes.labelRoot,
//                     focused: classes.labelFocused,
//                   },
//                 }}
//                 // helperText="Incorrect entry."
//               />
//               <TextField
//                 id="filled-error-helper-text"
//                 label="Phone Number*"
//                 InputProps={{ classes: { root: classes.inputRoot } }}
//                 InputLabelProps={{
//                   classes: {
//                     root: classes.labelRoot,
//                     focused: classes.labelFocused,
//                   },
//                 }}
//                 // helperText="Incorrect entry."
//               />
//               <TextField
//                 id="filled-error-helper-text"
//                 label="Country and area code of your phone number *"
//                 InputProps={{ classes: { root: classes.inputRoot } }}
//                 InputLabelProps={{
//                   classes: {
//                     root: classes.labelRoot,
//                     focused: classes.labelFocused,
//                   },
//                 }}
//                 // helperText="Incorrect entry."
//               />
//             </div>
//           </form>
//           <Typography style={{ marginTop: 20 }}>
//             How did you hear of us? Have you seen our work at a friend's
//             <br /> wedding?
//           </Typography>
//           <TextareaAutosize
//             style={{ width: 400 }}
//             rowsMin={5}
//             placeholder="Minimum 3 rows"
//           />
//         </div>
//         <div>
//           <Radio />
//         </div>
//         <div>
//           <form className={classes.root1} noValidate autoComplete="off">
//             <div>
//               <TextField
//                 id="filled-error-helper-text"
//                 label="Which city/country is the shoot in? *"
//                 InputProps={{ classes: { root: classes.inputRoot } }}
//                 InputLabelProps={{
//                   classes: {
//                     root: classes.labelRoot,
//                     focused: classes.labelFocused,
//                   },
//                 }}
//                 // helperText="Incorrect entry."
//               />
//             </div>
//           </form>
//         </div>
//         <div style={{ marginTop: 20 }}>
//           <FormControl>
//             <Typography>What event do you want to invite us to? *</Typography>
//             <Select native defaultValue="" id="grouped-native-select">
//               <option aria-label="None" value="" />
//               <option value={1}>Wedding</option>
//               <option value={1}>Portrait Shoot(pre/post wedding)</option>
//               <option value={1}>
//                 Lifestyle Event(Parties/Other celebrations)
//               </option>
//               <option value={1}>Stories for Brands</option>
//             </Select>
//           </FormControl>
//           <div>
//             <Typography style={{ marginTop: 25 }} variant="h4">
//               {" "}
//               Sava the Date
//             </Typography>
//             <Date />
//           </div>
//           <div>
//             <Button style={{ marginTop:50, textTransform:"none"}} variant="contained" color="primary">
//               Finished!
//             </Button>
//           </div>
//         </div>

//       </Container>
//     </React.Fragment>
//   );
// }

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, RadioGroup } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Grid } from "@material-ui/core";
import Controls from "../componets/controls/controls";
import SwipeableTextMobileStepper from "../componets/controls/images";
import GridList from "@material-ui/core/GridList";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Radio from "./controls/RadioGroup";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import { FormHelperText } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Date from "./controls/DatePicker";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const useStyles = makeStyles((theme) => ({
  toolbarmargin: {
    ...theme.mixins.toolbar,
  },
  container: {
    //   Color:"red",
    //   width:"50%",
    //   margin:"0px 118.66px 0px 118.66px",
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
  root1: {
    "& .MuiTextField-root": {
      width: 500,
    },
  },
  inputRoot: {
    fontSize: 20,
  },
  labelRoot: {
    fontSize: 18,
    "&$labelFocused": {
      color: "purple",
    },
  },
}));

export default function ElevateAppBar() {
  // const { color, children, onClick } = props1;
  const classes = useStyles();

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    details: "",
    country: "",
    date: "",
    socialMedia: "",
    options: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Its too short")
      .max(60, "Must be no more than ${max} characters.")
      .typeError("Enter valid name")
      .required("Required"),
    email: Yup.string()
      .email("Please enter valid email")
      .min(10, "Must be at least ${min} characters.")
      .max(60, "Must be no more than ${max} characters.")
      .required("Required"),
    phoneNumber: Yup.number()
      .min(10, "Phone number length should be 10 digits")
      .typeError("Enter valid phone number")
      .required("Required"),
    countryCode: Yup.number()
      .min(2, "Country code length is not correct")
      .typeError("Enter valid country code like +91")
      .required("Required"),
    details: Yup.string()
      .min(2, "Its too short")
      .max(60, "Must be no more than ${max} characters.")
      .required("Required"),
    country: Yup.string()
      .min(3, "Its too short")
      .max(60, "Must be no more than ${max} characters.")
      .required("Required"),
    date: Yup.date().required("Required"),
    options: Yup.string().required("Required"),
    socialMedia: Yup.string().required("Required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);

    alert("Logged In successfully");
    console.log("sucessfully done");
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(props);
  };

  return (
    <React.Fragment>
      {/* <container className={classes.container}>

        </container>
      <div className={classes.toolbarmargin} />
      <Grid container direction="row" justify="center" alignItems="center" >
        <Typography >Be the star in your own story</Typography>
      </Grid> */}
      <CssBaseline />
      <div className={classes.toolbarmargin} />
      <Container maxWidth="md">
        <div>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Shippori Mincho",
              marginTop: 50,
              marginBottom: 30,
            }}
          >
            Be the star in your own story
          </Typography>
        </div>
        <hr style={{ opacity: "0.4" }} />
        <div>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Shippori Mincho",
              marginTop: 50,
              marginBottom: 30,
            }}
          >
            Hello, from Stories by Viswachand! <br /> This This form will take
            you under two minutes to fill in (yes, we timed it).
            <br />
            <br />
            Tell us about yourself and your event, and we'll get back to you
            shortly :)
          </Typography>
        </div>
        <hr style={{ opacity: "0.4" }} />
        <Typography variant="h4">Tell us about yourself</Typography>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form className={classes.root} noValidate autoComplete="off">
                <div>
                  <Field
                    as={TextField}
                    name="name"
                    id="filled-error-helper-text"
                    label="Name*"
                    helperText={<ErrorMessage name="name" />}
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  <Field
                    as={TextField}
                    name="email"
                    id="filled-error-helper-text"
                    helperText={<ErrorMessage name="email" />}
                    label="Email*"
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  <Field
                    as={TextField}
                    name="phoneNumber"
                    id="filled-error-helper-text"
                    label="Phone Number*"
                    helperText={<ErrorMessage name="phoneNumber" />}
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  <Field
                    as={TextField}
                    name="countryCode"
                    id="filled-error-helper-text"
                    helperText={<ErrorMessage name="countryCode" />}
                    label="Country and area code of your phone number *"
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  <Field
                    as={TextField}
                    name="details"
                    id="filled-error-helper-text"
                    helperText={<ErrorMessage name="details" />}
                    label="How did you hear of us?Have you seen our work at wedding?"
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  <Field
                    as={TextField}
                    name="country"
                    id="filled-error-helper-text"
                    helperText={<ErrorMessage name="country" />}
                    label="Which city/country is the shoot in? *"
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  <Typography style={{ marginTop: 25 }} variant="h4">
                    Sava the Date
                  </Typography>
                  <Field
                    as={TextField}
                    name="date"
                    id="filled-error-helper-text"
                    type="date"
                    helperText={<ErrorMessage name="date" />}
                    InputProps={{ classes: { root: classes.inputRoot } }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                    // helperText="Incorrect entry."
                  />
                  {/* <Radio/> */}
                  <br />
                  <FormControl>
                    <Typography>
                      Where did you see our work most recently? *
                    </Typography>
                    <Field
                      as={Select}
                      native
                      defaultValue=""
                      id="grouped-native-select"
                      name="socialMedia"
                      helperText={<ErrorMessage name="socialMedia" />}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>Facebook</option>
                      <option value={1}>Instagram</option>
                      <option value={1}>Friends Wedding</option>
                      <option value={1}>On a blog, or in the press</option>
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    <ErrorMessage name="socialMedia" />
                  </FormHelperText>

                  <br />
                  <FormControl>
                    <Typography>
                      What event do you want to invite us to? *
                    </Typography>
                    <Field
                      as={Select}
                      native
                      defaultValue=""
                      id="grouped-native-select"
                      name="options"
                      helperText={<ErrorMessage name="options" />}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>Wedding</option>
                      <option value={1}>
                        Portrait Shoot(pre/post wedding)
                      </option>
                      <option value={1}>
                        Lifestyle Event(Parties/Other celebrations)
                      </option>
                      <option value={1}>Stories for Brands</option>
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    <ErrorMessage name="options" />
                  </FormHelperText>
                </div>
                <Button
                  type="submit"
                  style={{ marginTop: 50, textTransform: "none" }}
                  variant="contained"
                  color="primary"
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Finished"}
                </Button>
              </Form>
            )}
          </Formik>
          {/* <Typography style={{ marginTop: 20 }}>
            How did you hear of us? Have you seen our work at a friend's wedding?
          </Typography>
          <TextareaAutosize
            style={{ width: 400 }}
            rowsMin={5}
            placeholder="Minimum 3 rows"
          /> */}
        </div>
        <div>{/* <Radio /> */}</div>
        <div>
          {/* <form className={classes.root1} noValidate autoComplete="off">
            <div>
              <TextField
                id="filled-error-helper-text"
                label="Which city/country is the shoot in? *"
                InputProps={{ classes: { root: classes.inputRoot } }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
                // helperText="Incorrect entry."
              />
            </div>
          </form> */}
        </div>
        <div style={{ marginTop: 20 }}>
          {/* <FormControl>
            <Typography>What event do you want to invite us to? *</Typography>
            <Select native defaultValue="" id="grouped-native-select">
              <option aria-label="None" value="" />
              <option value={1}>Wedding</option>
              <option value={1}>Portrait Shoot(pre/post wedding)</option>
              <option value={1}>
                Lifestyle Event(Parties/Other celebrations)
              </option>
              <option value={1}>Stories for Brands</option>
            </Select>
          </FormControl> */}
          <div>
            {/* <Typography style={{ marginTop: 25 }} variant="h4">
              {" "}
              Sava the Date
            </Typography> */}
            {/* <Date /> */}
          </div>
          <div>
            {/* <Button style={{ marginTop:50, textTransform:"none"}} variant="contained" color="primary" disabled={props.isSubmitting}>{props.isSubmitting?"Loading":"Finished"}
          
            </Button> */}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
