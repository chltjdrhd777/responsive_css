import React from "react";
import "scss/Header.scss";
import { Link } from "@material-ui/core";
import "scss/Header.scss";

function Header() {
  return (
    <header className="navBar">
      <div className="container">
        <h1 className="logo">Anderson</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Features">Features</Link>
            </li>
            <li>
              <Link href="/Docs">Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
