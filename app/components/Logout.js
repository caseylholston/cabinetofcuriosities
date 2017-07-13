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
            //style={styles.logoutStyle}
            className="btn logout btn-success"
          >
            Logout
          </button>
    );
  }
 
}

// const styles = {
//   logoutStyle: {
//     padding: "6px 15px",
//     lineHeight: "1.57142857",
//     border: "none",
//     float: "right"
//   }
// };
 
export default Logout;