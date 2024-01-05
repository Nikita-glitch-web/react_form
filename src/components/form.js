import React from "react";
import { useFormik } from "formik";
import { validate } from "../utils"

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <button className="btn" type="submit">Submit</button>
    </form>
  );
};


SignupForm();