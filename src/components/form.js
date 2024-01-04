import React from "react";
import { ReactDOM } from "react";
import { useFormik } from "formik";
import validate from "../utils/validate";
//import * as Yup from "yup";



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
  

      

      

      <button type="submit">Submit</button>
    </form>
  );
};

function FormApp() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FormApp />, rootElement);
