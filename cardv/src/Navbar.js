import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
// import { Nav, Bars, NavMenu } from "./NavbarElements";
// import AboutUs from "./AboutUs";
// import AboutData from "./AboutData";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          {/* <NavLink to="/AboutUs" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/AboutData" activeStyle>
            The Data
          </NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
