import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./Login";

const Main = props => (
  <div>
    <Navbar />
    {props.children}
    <Login />
    <Footer />
  </div>
);

export default Main;
