"use client";
import { useSearchParams } from "next/navigation";
import React, { useRef } from "react";

import { testimonials } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";

  const swiperRef = useRef(null); // Create a reference for the swiper instance

  return (
    <>
      <div
        className="auth-page container my-5 d-flex align-items-center justify-content-between flex-wrap-reverse gap-4"
      >
        <div
          className="testimonials-students w-50 flex-grow-1 m-auto"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>Students Testimonials</h3>
          <p className="text-black-50 ">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>

          <div className="testimonials-items position-relative mt-5">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={false}
              loop={true}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial._id}>
                  <div
                    className="bg-white rounded-2 w-100"
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="custom-nav-buttons d-flex align-items-center justify-content-end mt-4 gap-3">
              <button
                onClick={() => swiperRef.current.swiper.slidePrev()}
                className="swiper-button-prev-custom btn white-btn"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={() => swiperRef.current.swiper.slideNext()}
                className="swiper-button-next-custom btn white-btn"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="auth-content bg-white p-4 rounded-3 flex-grow-1 m-auto" style={{
          maxWidth : "500px"
        }}>
          <div className="head text-center">
            <h3 className="fw-bold">{mode === "login" ? "Login" : "Signup"}</h3>
            <p className="text-black-50">
              {mode === "login"
                ? "Welcome back! Please log in to access your account."
                : "Create an account to unlock exclusive features."}
            </p>
          </div>
          <form>
            {mode === "signup" && (
              <div className="field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {mode === "signup" && (
              <div className="field flex-row my-4">
                <input type="checkbox" name="" id="agree" role="button" />
                <label htmlFor="agree" className="text-black-50 fw-meduim">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>
            )}

            <button className="btn blue-btn w-100">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="separator d-flex my-4 align-items-center justify-content-between">
            <div className="border-top flex-grow-1"></div>
            <span className="text-black-50 mx-2">OR</span>
            <div className="border-top flex-grow-1"></div>
          </div>

          <div
            role="button"
            className="withGoogle d-flex align-items-center justify-content-center gap-3 p-3 rounded-3"
            style={{
              backgroundColor: "#F7F7F8",
            }}
          >
            <img src="/icons/google.svg" alt="" />
            <span className="fw-semibold">
              {mode === "login" ? "Login" : "Signup"} with Google
            </span>
          </div>

          <div className="text-center mt-4">
            <p className="">
              {mode === "signup" ? "Already" : "Don't"} have an account?{" "}
              <Link
                href={
                  mode === "login" ? "/auth?mode=signup" : "/auth?mode=login"
                }
              >
                <span
                  className="fw-semibold"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  {mode === "login" ? "Signup" : "Login"}{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      rotate: "-45deg",
                    }}
                  />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
