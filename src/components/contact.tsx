import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Field, Form, Formik } from "formik";
import { Call, LocationOnRounded, Mail } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import * as Yup from "yup";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px 10px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      margin: "auto",
      width: "100%",
      padding: "20px 20px",
    },
  },
  header_title: {
    fontFamily: "Nunito",
    fontSize: "45px",
    width: "100%",
    textAlign: "left",
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& > span": {
      marginTop: "-1rem",
      marginLeft: "0.5rem",
      height: "0.7rem",
      width: "15rem",
      backgroundColor: "#0091d5",

      // @media (max-width: 760px) {
      //   margin-top: -0.5rem;
      //   width: 13rem;
      //   height: 0.5rem;
      // }
    },
  },
  item: {
    padding: "10px",
  },
  contact_section: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: "0 50px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      padding: "0 20px",
    },
  },
  google_map: {},
  subtitle: {
    fontFamily: "Nunito",
    fontSize: 24,
    lineHeight: "24px",
    fontWeight: 500,
    padding: "20px 0",
  },
  info: {
    fontFamily: "Nunito",
    fontSize: "16px",
    lineHeight: "44px",
    fontWeight: 300,
    display: "flex",
    alignItems: "center",
    "& > svg": {
      margin: "0 4px 0 0 ",
      fontSize: "3rem",
    },
    "& > a": {
      fontSize: "16px",
    },
  },
}));
const schema = Yup.object().shape({
  firstName: Yup.string().max(10).min(4).required("This field is required"),
  lastName: Yup.string().max(10).min(4).required("This field is required"),
  email: Yup.string().email().required("This field is required"),
  subject: Yup.string().max(20).min(4).required("This field is required"),
  text: Yup.string().min(10).required("This field is required"),
});
function Contact() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className={classes.root} id="contact">
      <h1 className={classes.header_title} data-aos="fade-left">
        Contact<span></span>
      </h1>
      <Grid container data-aos="fade-up">
        <Grid item container xs={12} sm={12} md={6}>
          <Grid item md={12} sm={12} data-aos="fade-right">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                text: "",
              }}
              validationSchema={schema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const response = await fetch("https://formspree.io/mqkyrpav", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
                resetForm({});
                console.log("asdas", response.status);
                setSubmitting(false);
                if (response.status !== 400) {
                  return setOpen(true);
                }
                setError(true);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                console.log(errors),
                (
                  <Form>
                    <Grid container>
                      <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        className={classes.item}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="First Name"
                          name="firstName"
                          required
                          error={touched && !!errors.firstName}
                          helperText={errors.firstName?.split("firstName")[1]}
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        className={classes.item}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          required
                          error={touched && !!errors.lastName}
                          helperText={errors.lastName?.split("lastName")[1]}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        className={classes.item}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="Email"
                          name="email"
                          required
                          error={touched && !!errors.email}
                          helperText={errors.email?.split("email")[1]}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        className={classes.item}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="Subject"
                          name="subject"
                          required
                          error={touched && !!errors.subject}
                          helperText={errors.subject?.split("subject")[1]}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        className={classes.item}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="Message"
                          name="text"
                          multiline
                          rowsMax={4}
                          required
                          error={touched && !!errors.text}
                          helperText={errors.text?.split("text")[1]}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        className={classes.item}
                        // frameborder={0}e={classes.item}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {console.log(isSubmitting)}
                          {!isSubmitting ? (
                            "Submit"
                          ) : (
                            <CircularProgress
                              style={{ width: "50%", height: "50%" }}
                            />
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )
              )}
            </Formik>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          className={classes.contact_section}
          data-aos="fade-left"
        >
          <div>
            <h1 className={classes.subtitle}>Contact Info</h1>
            <p className={classes.info}>
              <LocationOnRounded color="primary" />
              Old Baneshwor, Kathmandu, Nepal
            </p>
            <p className={classes.info}>
              <Call color="primary" />
              +977 9819696573
            </p>
            <p className={classes.info}>
              <Mail color="primary" />
              <a href="mailto:oscarmike286@gmail.com">oscarmike286@gmail.com</a>
            </p>
            <p className={classes.info}>
              <Mail color="primary" />
              <a href="mailto:gauravjha286@gmail.com">gauravjha286@gmail.com</a>
            </p>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={12} data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.494074485047!2d85.33996718077675!3d27.702027589801204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c57ba27b5%3A0xde93b6685bb60872!2sOld%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1605014594831!5m2!1sen!2snp"
            width="100%"
            height="500"
            style={{ border: 0 }}
          ></iframe>
        </Grid>
      </Grid>
      {
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(!open)}
        >
          <Alert onClose={() => setOpen(!open)} severity="success">
            Message Sent Sucessfully!
          </Alert>
        </Snackbar>
      }
      {
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setError(!error)}
        >
          <Alert onClose={() => setError(!open)} severity="error">
            Something Wrong Happened!. Please Try Again Later
          </Alert>
        </Snackbar>
      }
    </div>
  );
}

export default Contact;
