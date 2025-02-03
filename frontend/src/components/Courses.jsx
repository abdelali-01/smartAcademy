import { courses, coursesCategories } from "@/data";
import Link from "next/link";
export default function Courses() {
  return (
    <div className="courses-section my-5">
      <div className="courses-head d-flex align-items-end justify-content-between flex-wrap">
        <div className="left" style={{ maxWidth: "800px" }}>
          <h2>Our Courses</h2>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="right">
          <Link href="/courses">
            <button className="btn white-btn">View All</button>
          </Link>
        </div>
      </div>

      <div className="courses-filtring d-flex align-items-center gap-1 fs-6 mt-5" style={{
        overflowX : "scroll" ,
        scrollbarWidth : "none" ,
        msOverflowStyle : "none"
      }}>
        <span className="text-black-50 pb-2 px-4 active" role="button">
          All
        </span>
        {coursesCategories.map((category) => {
          return (
            <span className="text-black-50 pb-2 px-4" role="button" style={{
              textWrap : "nowrap"
            }}>
              {category.title}
            </span>
          );
        })}
      </div>
      <div className="border"></div>

      <div className="courses-body gap-4 my-4 row m-auto">
        {courses.map((course) => {
          return (
            <div
              className="courseSmallItem col col-lg-5 bg-white p-4 rounded-2"
              style={{
                minWidth: "360px",
                maxWidth: "700px",
                flexGrow : "1"
              }}
            >
              <img
                src={course.images[0]}
                alt=""
                style={{
                  width: "100%",
                  minWidth : "0" ,
                  height: "266px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div className="d-flex my-4 align-items-center justify-content-between flex-wrap gap-3">
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

              <div className="course-information">
                <h5>{course.title}</h5>
                <p>{course.description}</p>
              </div>

              <Link href={"/courses/" + course._id}>
                <button
                  className="btn white-btn w-100"
                  style={{ background: "var(--background) !important" }}
                >
                  Get it Now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
