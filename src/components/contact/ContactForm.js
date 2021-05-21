import * as Yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import { useSnackbar } from "notistack";
import { useFormik, Form, FormikProvider } from "formik";
import { Box, Grid, TextField, Autocomplete } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { CATEGORIES } from "../../constants/labels";
import { postComment } from "../../api/contact";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// ----------------------------------------------------------------------

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    companyName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Company name required"),
    category: Yup.object().required("Company name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      message: "",
      category: { name: "Other" },
      subscription: false,
    },
    enableReinitialize: true,
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const form = {
          ...values,
          category: values.category.name,
          date: new Date().toString(),
        };

        postComment(form);
        enqueueSnackbar(`Thank you ${values.name} ,we'll respond quickly`, {
          variant: "success",
        });
        setTimeout(() => {
          history.push("");
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    setFieldValue,
    values,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Your Name"
              {...getFieldProps("name")}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              fullWidth
              label="Category"
              value={values.category}
              filterSelectedOptions
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <li {...props}>
                  <span>{option.name}</span>
                </li>
              )}
              {...getFieldProps("category")}
              options={CATEGORIES}
              onChange={(e, value, name, instance) => {
                if (!instance) {
                  return;
                }

                setFieldValue("category", instance.option);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={Boolean(touched.category && errors.category)}
                  helperText={touched.category && errors.category}
                  label="Category"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company name"
              {...getFieldProps("companyName")}
              error={Boolean(touched.companyName && errors.companyName)}
              helperText={touched.companyName && errors.companyName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="username"
              name="email"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="message"
              label="Message"
              multiline
              rows={5}
              maxRows={5}
              placeholder="Share us your ideas !"
              {...getFieldProps("message")}
              error={Boolean(touched.message && errors.message)}
              helperText={touched.message && errors.email}
            />
          </Grid>

          <FormControlLabel
            sx={{ ml: 1, mt: 3 }}
            control={
              <GreenCheckbox
                checked={values.subscription}
                onChange={() => {
                  setFieldValue("subscription", !values.subscription);
                }}
                name="checkedG"
              />
            }
            label="Subscribe to Newsletter"
          />
        </Grid>

        <Box sx={{ mt: 3 }}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            pending={isSubmitting}
          >
            Send
          </LoadingButton>
        </Box>
      </Form>
    </FormikProvider>
  );
}
