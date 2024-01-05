
import React, { Component } from 'react';
import { formik } from 'formik';
export class Phone extends Component {

  render() {
    return (
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>
    );
  }

}