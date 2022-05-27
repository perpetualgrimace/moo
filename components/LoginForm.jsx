import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import TextField from "/components/Textfield";
import Button from "/components/Button";

const TheForm = (props) => {
  const { touched, errors } = props;

  return (
    <Form className="login-form">
      <TextField
        labelText="Email address"
        placeholder="Your email address"
        name="email"
        touched={touched}
        errors={errors}
      />

      <TextField
        labelText="Password"
        placeholder="8+ characters"
        type="password"
        name="password"
        touched={touched}
        errors={errors}
      />

      <Button type="submit" fill fontSize="md" className="darkglass">
        Log in
      </Button>
    </Form>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address required"),
    password: Yup.string()
      .min(8, "Must be least 8 characters")
      .required("Password required"),
  }),
  handleSubmit: (values) => {
    console.log(values);
  },
})(TheForm);

export default LoginForm;
