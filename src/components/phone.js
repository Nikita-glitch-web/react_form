
import React from 'react';
// import { useFormik } from 'formik';
// import { validate } from './utils/validate'
function Phone(props) {
    return (
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.phone}
        />
        {props.formik.errors.phone ? <div>{props.formik.errors.phone}</div> : null}
      </div>
    );
  }


export default Phone;
