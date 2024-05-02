import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/account">
            <li>Account</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
