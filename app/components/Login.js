import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import NewAPI from "../utils/NewAPI";

class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);
    this.state = {
      user:[]
    }
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var email = googleUser.w3.U3;
    console.log({accessToken: id_token});
    console.log({emailAddress: email});
    // console.log(googleUser);
    // console.log(googleUser.w3.U3);
    NewAPI.saveUser(id_token,email);
    //use local storage to store the email address
    localStorage.setItem("user", email);

    //destroy the local and session storage
  }
 
  render () {
    return (
      <div>
        <GoogleLogin socialId="624150566627-eps8ouohd96phe4s9h0juel3omrjtmdj.apps.googleusercontent.com"
                     class="btn google-login btn-success"
                     scope="profile email"
                     responseHandler={this.responseGoogle}
                     buttonText="Login"/>
      </div>
    );
  }
 
}
 
export default Login;

// import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
 
// class Login extends Component {
//   constructor() {
//     super();
  
// const responseGoogle = (response) => {
//     console.log(response);
//   };

// }
 
// render() {
//   return (
    
//       <div className="container">
//         <GoogleLogin
//           clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//           buttonText="Login"
//           //onSuccess={responseGoogle}
//          // onFailure={responseGoogle}
//         />
//         </div>
//     );
//   }
// }

// export default Login;