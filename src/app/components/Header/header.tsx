import React from "react";
import NavBar from "../Navbar/navbar";
import Logo from "../Logo/logo";
import Icones from "../Icones/icones";
import './Header.css';
import '../../globals.css';
const Header = () => {
    
    return  <header className="header w-full  bg-white flex items-center">
        <div className="container mx-auto flex  items-center">
            <Logo />
            <NavBar />
            <Icones />
        </div>
    </header>
    ;
  };
  
  export default Header;