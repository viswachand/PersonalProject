// import React from "react";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import { makeStyles } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   label: {
//     color: "red",
//   },
// }));

// export default function RadioButtonsGroup() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState("Facebook");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <FormControl component="fieldset">
//       <Typography style={{ marginTop:22}}>Where did you see our work most recently?</Typography>
//       <RadioGroup value={value} onChange={handleChange}>
//         <FormControlLabel
//           value="Facebook"
//           control={<Radio />}
//           label="Facebook"
//         />
//         <FormControlLabel
//           value="Instagram"
//           control={<Radio />}
//           label="Instagram"
//         />
//         <FormControlLabel
//           value="Friends Weddding"
//           control={<Radio />}
//           label="Friends Weddding"
//         />
//         <FormControlLabel
//           value="On a blog, or in the press"
//           control={<Radio />}
//           label="On a blog, or in the press"
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// }

import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const useStyles = makeStyles((theme) => ({
  label: {
    color: "red",
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Facebook");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const initialValues = {
    socialMedia: "",
  };
  const validationSchema = Yup.object().shape({
    socialMedia: Yup.string()
      .oneOf(
        [
          "Facebook",
          "Instagram",
          "Friends Weddding",
          "On a blog or in the press",
        ],
        "Required"
      )
      .required("Required"),
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* {(props)=>( */}
      <Form>
        <FormControl component="fieldset">
          <FormLabel component="legend">  Where did you see our work most recently?</FormLabel>
          <Typography style={{ marginTop: 22 }}>
            Where did you see our work most recently?
          </Typography>
          <Field as={RadioGroup} name="socialMedia" name="socialMedia">
            <FormControlLabel
              value="Facebook"
              control={<Radio />}
              label="Facebook"
            />
            <FormControlLabel
              value="Instagram"
              control={<Radio />}
              label="Instagram"
            />
            <FormControlLabel
              value="Friends Weddding"
              control={<Radio />}
              label="Friends Weddding"
            />
            <FormControlLabel
              value="On a blog, or in the press"
              control={<Radio />}
              label="On a blog, or in the press"
            />
          </Field>
        </FormControl>
        <FormHelperText>
          <ErrorMessage name="socialMedia" />
        </FormHelperText>
      </Form>

      {/* )} */}
    </Formik>
  );
}
