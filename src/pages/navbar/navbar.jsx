import React from "react";
import { Navbar, NavItem, LogoItem } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Logo } from "../../components/Logo";


const NavBar = () => {
  return (
    <Navbar>
      <Logo src={logo} />
      <div>
      <Link to="/home">
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/cats">
        <NavItem>Cats</NavItem>
      </Link>
      <Link to="/breeds">
        <NavItem>Breeds</NavItem>
      </Link>
      <Link to="/favorites">
        <NavItem>Favorites</NavItem>
      </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
