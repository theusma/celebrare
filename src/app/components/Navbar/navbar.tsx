import React from "react";
import Link from "next/link";
import './navbar.css';
const NavBar = () => {
    return <nav>
                <ul className="flex gap-10m menu">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/produtos">Produtos</Link></li>
                    <li><Link href="/produtos">Contato</Link></li>
                </ul>
            </nav>;
  };
  
  export default NavBar;




  