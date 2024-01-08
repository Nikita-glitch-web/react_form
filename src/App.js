
import React from "react";
import SignupForm from "./components/SignupForm";
import FirstName from "./components/FirstName";
import Email from "./components/Email";
import Phone from "./components/Phone";


function App() {
  return (
    <div className="container">
      <SignupForm>
        <FirstName className="input" />
        <Email />
        <Phone />
      </SignupForm>
    </div>
  ); 
}


export default App;

// function App() {
//   return (
//     <div className="container">
//       <FormApp />
//     </div>
//   );
// }

// export default App;
