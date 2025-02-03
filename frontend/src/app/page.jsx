import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import HomeHero from "@/components/HomeHero";
import JoinUs from "@/components/JoinUs";
import Testimonials from "@/components/Testimonials";
import Utilities from "@/components/Utilities";
import Video from "@/components/Video";
import { benefits, courses, coursesCategories } from "@/data";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <HomeHero />
      <Utilities />
      <Video />

      {/* i don't make components for this sections because i think we don't need to put it in another page */}
      {/* Benefits section */}
      <div className="benifits-section my-5 pt-5">
        <div className="benifits-head d-flex align-items-end justify-content-between flex-wrap">
          <div className="left" style={{ maxWidth: "800px" }}>
            <h2>Benefits</h2>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="right">
            <Link href="/about-us">
              <button className="btn white-btn">View All</button>
            </Link>
          </div>
        </div>
        <div className="benifits-body d-flex flex-wrap gap-3 my-5">
          {benefits.map((benifit, i) => {
            return (
              <div
                className="py-4 px-5 rounded-2 bg-white flex-grow-1 position-relative"
                style={{
                  width: "350px",
                  minWidth: "280px",
                }}
              >
                <div className="fs-1 fw-bold d-flex justify-content-end mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h6 className="fw-bold">{benifit.title}</h6>
                <p className="text-black-50 mb-5 pb-5">{benifit.description}</p>

                <div
                  className="btn white-btn fs-5 position-absolute mt-4"
                  style={{
                    bottom: "40px",
                    right: "40px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ rotate: "-45deg", color: "var(--btns)" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Courses />
      <Testimonials />
      <FAQ />
      <JoinUs />
    </div>
  );
}
