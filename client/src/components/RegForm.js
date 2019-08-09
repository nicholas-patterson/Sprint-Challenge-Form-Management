import React from "react";
import { Field, Form, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <>
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
          <button
            onClick={() => console.log("submit button clicked")}
            type="submit"
          >
            Submit
          </button>
        </Form>
        <Link to="/data">Data Page</Link>
      </>
    );
  }
}

const FormikRegForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("You must type a username!"),
    password: Yup.string().required("You must have a password!")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response));
    resetForm();
  }
})(RegForm);

export default FormikRegForm;
