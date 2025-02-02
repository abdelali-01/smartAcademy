import { testimonials } from "@/data";
import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials my-5">
      <div className="head-testimonials d-flex justify-content-between align-items-end">
        <div className="left" style={{ maxWidth: "800px" }}>
          <h2>Our Testimonials</h2>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="right">
          <button className="btn white-btn">View All</button>
        </div>
      </div>

      <div className="body-testimonals my-5 d-flex gap-3 flex-wrap">
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial._id}
              className="bg-white rounded-2 flex-grow-1"
              style={{
                border: "1px solid var(--borders)",
                minWidth: "350px",
                width: "500px",
              }}
            >
              <div className="comment px-5 py-4">
                <p>{testimonial.comment}</p>
              </div>
              <div className="border "></div>
              <div className="user-information px-5 py-4 d-flex align-items-center gap-3">
                <img src="/image.png" alt="" />
                <h6 className="my-0">{testimonial.username}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
