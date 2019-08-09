import React from "react";
import { Field, Form, withFormik } from "formik";
import * as Yup from "yup";

class RegForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <h1>User Registration</h1>
        <Field type="text" placeholder="username" name="username" />
        {this.props.touched.username && this.props.errors.username && (
          <p>{this.props.errors.username}</p>
        )}
        <Field type="password" placeholder="password" name="password" />
        {this.props.touched.password && this.props.errors.password && (
          <p>{this.props.errors.password}</p>
        )}
        <button>Submit</button>
      </Form>
    );
  }
}

const FormikRegForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username | "",
      password: password | ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("You must type a username!"),
    password: Yup.string().required("You must have a password!")
  })
})(RegForm);

export default FormikRegForm;
