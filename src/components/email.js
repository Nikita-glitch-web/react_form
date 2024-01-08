

import React from "react";


function Email(props){
    return (
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.email}
        />
        {props.formik.errors.email ? (
          <div>{props.formik.errors.email}</div>
        ) : null}
      </div>
    );
  }

  

export default Email;
