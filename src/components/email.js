

import React, { Component } from "react";
import { formik } from "../App";

export class Email extends Component {
  render() {
    return (
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
    );
  }
}