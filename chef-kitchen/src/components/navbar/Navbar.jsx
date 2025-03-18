import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-header">
        <img
          src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg"
          alt=""
        />
        <h1>chef's Kitchen.</h1>
      </div>
      <div className="navbar-items">
        <ol className="items">
          <li>Home</li>
          <li>About Us</li>
          <li>Recipe</li>
          <li>Gallery</li>
        </ol>
      </div>
      <div className="navbar-contact">
        <p>+1(909) 235-9814</p>
      </div>
      <div className="navbar-login">
        <p>sign in </p>
        <p>sign up</p>
      </div>
    </div>
  );
};

export default Navbar;
