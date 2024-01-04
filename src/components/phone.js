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