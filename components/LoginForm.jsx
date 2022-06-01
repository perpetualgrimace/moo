import { withFormik, setStatus, Form } from "formik";
import * as Yup from "yup";

import { userService } from "/services/userService";

import TextField from "/components/Textfield";
import Button from "/components/Button";

function onSubmit(values) {
  const username = values.email;
  const { password, router } = values;

  return userService
    .login(username, password)
    .then(() => {
      const returnUrl = router.query.returnUrl || "/";
      router.push(returnUrl);
    })
    .catch((error) => {
      console.log(error);
    });
}

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
      router: props.router || "",
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
  handleSubmit: (values) => onSubmit(values),
})(TheForm);

export default LoginForm;
