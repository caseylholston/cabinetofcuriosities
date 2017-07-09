import React from 'react';
import GoogleLogin from 'react-google-login';

class Logout extends React.Component{
 
  constructor () {
    super();
    }
  
  handleLogoutClick() {
        localStorage.clear();
        //GoogleAuth.signOut();
  }
 
  render () {
    return (
          <button
            onClick={this.handleLogoutClick}
            className="btn btn-success"
          >
            Logout
          </button>
    );
  }
 
}
 
export default Logout;