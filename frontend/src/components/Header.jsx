"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const { isFree } = useSelector((state) => state.courses);

  // we
  if (isFree)
    return (
      <Link href={"/courses"}>
        <header
          className="d-flex align-items-center m-3 rounded-2 justify-content-center gap-1 p-2 text-white"
          style={{
            background: "var(--btns)",
            color: "#ffff !important",
            fontWeight: "300",
          }}
        >
          <p className="m-0">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
          <FontAwesomeIcon icon={faArrowRight} width={20} />
        </header>
      </Link>
    );
}
