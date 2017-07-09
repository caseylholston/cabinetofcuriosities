import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./Login";
import Logout from "./Logout";


const Main = props => (
  <div>
    <Navbar />
    {props.children}
    <Login />
    <Logout />
    <Footer />
  </div>
);

export default Main;
