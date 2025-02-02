"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname() ;
  
  return (
    <div className="navbar pb-3 mb-3">
      <div className="container">
        <Link href={"/"}>
        <img src="/smart-logo.svg" alt="" />
        </Link>

        <div className="navbar-links mx-5">
          <Link href="/">
            <span className={`navbar-link p-3 rounded-2 ${pathName === "/" && "active"} `}>Home</span>
          </Link>
          <Link href="/courses">
            <span className={`navbar-link p-3 rounded-2 ${pathName.startsWith("/courses") && "active"}` }>Courses</span>
          </Link>
          <Link href="/about-us">
            <span className={`navbar-link p-3 rounded-2 ${pathName === "/about-us" && "active"}` }>About Us</span>
          </Link>
          <Link href="/contact">
            <span className={`navbar-link p-3 rounded-2 ${pathName === "/contact" && "active"}` }>Contact</span>
          </Link>
        </div>

        <div className="flex-grow-1"></div>
        <div className="navbar-cta">
          <Link href={"#"}>
            <button className="btn btn-default py-2 px-3 me-3">Signup</button>
          </Link>
          <Link href={"#"}>
            <button className="btn blue-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
