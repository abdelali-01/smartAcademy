import Link from "next/link";
import React from "react";

export default function JoinNow() {
  return (
    <div className="join-now  bg-white p-5 rounded-4 d-flex align-items-center justify-content-between">
      <div className="text" style={{ maxWidth: "750px" }}>
        <h2 className="fw-bold">
          <span className="fw-bold" style={{ color: "#054581" }}>
            Together
          </span>
          , let's shape the future of digital innovation
        </h2>
        <p className="text-black-50">
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <div className="cta">
        <Link href={"/auth"}>
          <button className="btn blue-btn">Join Now </button>
        </Link>
      </div>
    </div>
  );
}
