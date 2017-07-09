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
    //anything else you want to do(save to localStorage)...
    NewAPI.saveUser(id_token,email);
    //use local storage to store the email address
   localStorage.setItem("user", email);

    //destroy the local and session storage
  }
 
  render () {
    return (
      <div>
        <GoogleLogin socialId="624150566627-eps8ouohd96phe4s9h0juel3omrjtmdj.apps.googleusercontent.com"
                     class="google-login"
                     scope="profile email"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
 
}
 
export default Login;