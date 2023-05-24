import * as React from "react";
import logo from "../Images/Logo.png";
import {nav } from "bootstrap";
import Navbar1 from "./Navbar1";

export default function HomeNavBar() {
  return (
    <div>
    <nav class="nav navbar navbar-light bg-black">
      <a class="navbar-brand" href="#">
        <img  
          src= {logo}  
          idth="80"
          height="80"
          class="d-inline-block align-top-left"
          alt="1"
        ></img>
      </a>
      <a class="rightAlign" >Broker Vote Application</a>
    </nav>
    </div>
    
  );
}
