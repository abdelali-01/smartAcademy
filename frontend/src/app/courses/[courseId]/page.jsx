"use client";

import JoinNow from "@/components/JoinNow";
import Loader from "@/components/Loader";
import { courses } from "@/data";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";



export default function CoursePage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const currentCourse = courses.find(
      (course) => course._id === parseInt(courseId)
    );
    setCourse(currentCourse);
  }, [courseId]);
  return (
    <div className="course-page container">
      {course === null ? (
        <Loader />
      ) : (
        <>
          <div className="courseHead my-5 d-flex align-items-center justify-content-between flex-wrap">
            <h1 className="fw-bold">{course.title} Course</h1>
            <p className="text-black-50" style={{ maxWidth: "600px" }}>
              {course.description}
            </p>
          </div>
          <img
            src={course.images[0]}
            alt=""
            style={{
              width: "100%",
              maxHeight : "80vh" ,
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <div className="curriculum my-4 d-flex gap-3 flex-wrap">
            {course.curriculum.map((c, i) => {
              return (
                <div
                  key={i}
                  className="bg-white rounded-2 p-4  flex-grow-1"
                  style={{
                    minWidth: "300px",
                    width: "500px",
                    maxWidth: "630px",
                  }}
                >
                  <div className="fw-bold fs-1 mb-3 d-flex justify-content-end">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h6 className="fw-bold pb-3">{c.title}</h6>
                  <div className="lessons mt-3">
                    {c.lessons.map((lesson, i) => {
                      return (
                        <div key={i} className="border rounded-3 p-3 my-3 d-flex justify-content-between align-items-center gap-2 flex-wrap">
                          <div style={{maxWidth : "70%"}}>
                            <h6>{lesson.title}</h6>
                            <p className="text-black-50 my-0">
                              Lesson {String(i + 1).padStart(2, "0")}
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-2 text-black-50 p-3 rounded-3" style={{
                            background : "var(--background)"
                          }}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <JoinNow/>
    </div>
  );
}
