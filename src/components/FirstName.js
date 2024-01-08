
import React from 'react';

function FirstName(props) {
     return (
       <div>
         <label htmlFor="firstName">First Name</label>
         <input
           className="input"
           id="firstName"
           name="firstName"
           type="text"
           onChange={props.formik.handleChange}
           onBlur={props.formik.handleBlur}
           value={props.formik.values.firstName}
         />
         {props.formik.errors.firstName ? (
           <div>{props.formik.errors.firstName}</div>
         ) : null}
       </div>
     );
}


export default FirstName;

// export class FirstName extends Component {
    // render () {
    //  return (
    //   <div>
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       id="firstName"
    //       name="firstName"
    //       type="text"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.firstName}
    //     />
    //     {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    //   </div>
    // )
    // }
// }