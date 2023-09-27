import { withFormik, Form } from "formik";
import * as Yup from "yup";

import { userService } from "/services/userService";

import TextField from "/components/controls/TextField";
import Button from "/components/controls/Button";

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
      alert(error);
    });
}

const TheForm = (props) => {
  const { touched, errors } = props;

  return (
    <Form className="login-form">
      <TextField
        labelText="Email address"
        placeholder="please type 'username'"
        name="email"
        touched={touched}
        errors={errors}
      />

      <TextField
        labelText="Password"
        placeholder="please type 'password'"
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
      // .email("Invalid email address")
      // .required("Email address required"),
      .required("please type 'username'"),
    password: Yup.string()
      // .min(8, "Must be least 8 characters")
      // .required("Password required"),
      .required("please type 'password'"),
  }),
  handleSubmit: (values) => onSubmit(values),
})(TheForm);

export default LoginForm;
