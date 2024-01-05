
import React, { Component } from 'react';
import { formik } from "formik";
export class Phone extends Component {
    render () {
     return (
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>
    )
    }
}