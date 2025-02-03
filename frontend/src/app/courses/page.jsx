import { courses } from "@/data";
import Link from "next/link";
import React from "react";

export const metadata = {
  title : "Courses Page"
}

export default function Courses() {
  return (
    <div className="courses-page my-5">
      <div className="container">
        <div className="head-page d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <h1 className="fw-bold w-50">
            Online Courses on Design and Development        
            
          </h1>
          <p className="text-black-50" style={{ maxWidth: "500px" }}>
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
        <div className="border mt-3"></div>

        <div className="courses my-5">
          {courses.map((course) => {
            return (
              <div key={course._id} className="rounded-3 bg-white p-4 my-4">
                <div className="courseItem-head d-flex align-items-center justify-content-between">
                  <div className="left-part" style={{ maxWidth: "800px" }}>
                    <h5 className="fw-bold">{course.title}</h5>
                    <p className="text-black-50">{course.description}</p>
                  </div>
                  <div className="right-part">
                    <Link href={"/courses/" + course._id}>
                      <button className="btn white-btn">View Course</button>
                    </Link>
                  </div>
                </div>
                <div className="course-pictures d-flex align-items-center justify-content-between gap-2">
                  {course.images.map((img) => {
                    return (
                      <img
                        src={img}
                        className="flex-grow-1"
                        style={{ height: "330px" }}
                      />
                    );
                  })}
                </div>
                <div className="d-flex my-4 align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="border p-2 rounded-2 text-black-50">
                      {course.duration}
                    </div>
                    <div className="border p-2 rounded-2 text-black-50">
                      {course.for}
                    </div>
                  </div>
                  <h6>By {course.by}</h6>
                </div>

                <div className="cirriculum border rounded-3">
                  <h5 className="p-3 fw-bold my-0">Cirriculum</h5>
                  <div className="border-top"></div>

                  <div className="p-3 d-flex justify-content-between gap-4">
                    {course.curriculum.map((c, i) => {
                      return (
                        <div key={i} className="">
                          <div className="fs-1 fw-bold">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <h6>{c.title}</h6>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
