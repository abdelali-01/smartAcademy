"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathName = usePathname();

  // manage the navbar responsive
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    setIsOpen(false) ;

    window.addEventListener('scroll' , ()=> setIsOpen(false));
  },[pathName]);

  return (
    <div className="navbar pb-3 mb-3">
      <div className="container">
        <Link href={"/"}>
          <img src="/smart-logo.svg" alt="" />
        </Link>

        <div
          className={`navbar-links d-flex align-items-center justify-content-between flex-grow-1 ${
            isOpen && "open"
          }`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="x-mark position-absolute fs-2 top-0 end-0 m-3 d-none"
            role="button"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="links mx-5">
            <Link href="/">
              <span
                className={`navbar-link  p-3 rounded-2 ${
                  pathName === "/" && "active"
                } `}
              >
                Home
              </span>
            </Link>
            <Link href="/courses">
              <span
                className={`navbar-link w-100  p-3 rounded-2 ${
                  pathName.startsWith("/courses") && "active"
                }`}
              >
                Courses
              </span>
            </Link>
            <Link href="/about-us">
              <span
                className={`navbar-link w-100  p-3 rounded-2 ${
                  pathName === "/about-us" && "active"
                }`}
              >
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={`navbar-link w-100  p-3 rounded-2 ${
                  pathName === "/contact" && "active"
                }`}
              >
                Contact
              </span>
            </Link>
          </div>

          <div className="flex-grow-1"></div>
          <div className="navbar-cta d-flex align-items-center flex-wrap">
            <Link href={"/auth?mode=signup"}>
              <button className="btn btn-default py-2 px-3 me-3">Signup</button>
            </Link>
            <Link href={"/auth?mode=login"}>
              <button className="btn blue-btn">Login</button>
            </Link>
          </div>
        </div>

        <div
          className="navbar-menu d-none ms-4 fs-3"
          role="button"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </div>
    </div>
  );
}
