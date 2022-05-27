import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "/components/Button";

const TheForm = (props) => {
  const { touched, errors } = props;
  return (
    <Form className="login-form">
      <label>
        Email address
        <Field id="email" name="email" placeholder="email" />
      </label>
      {touched.email && errors.email && (
        <span className="help-block text-danger">{errors.email}</span>
      )}

      <label>
        Password
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
      </label>
      {touched.password && errors.password && (
        <span className="help-block text-danger">{errors.password}</span>
      )}

      <Button type="submit">Log in</Button>
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
