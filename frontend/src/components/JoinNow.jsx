"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { courses } from "@/data";

export default function JoinNow() {
  const { courseId } = useParams();
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    const foundedCourse = courses.find(
      (course) => course._id === parseInt(courseId)
    );

    if (foundedCourse) {
      setCurrentCourse(foundedCourse);
    }
  }, [courseId]);
  

  if (currentCourse) {
    const message = `Hello , I'm looking for the ${currentCourse.title} course please !`
    return (
      <div className="join-now  bg-white p-5 rounded-4 d-flex align-items-center justify-content-between flex-wrap">
        <div className="text" style={{ maxWidth: "750px" }}>
          <h2 className="fw-bold">
            <span className="fw-bold" style={{ color: "#054581" }}>
              Together
            </span>
            , let's shape the future of digital innovation
          </h2>
          <p className="text-black-50">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div className="cta">
          <Link href={`https://wa.me/213655878447?text=${message}`} target="_blank">
            <button className="btn blue-btn">Join Now </button>
          </Link>
        </div>
      </div>
    );
  }
}
