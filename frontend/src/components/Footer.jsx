import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-white" style={{marginTop : "100px"}}>
      <div className="container pt-5 pb-3">
        <div className="d-flex justify-content-between gap-5 flex-wrap">
          <div>
            <img src="/smart-logo.svg" alt="" />
            <div className="footer-contacts-information mt-4">
              <div className="d-flex align-items-center gap-3 my-3">
                <FontAwesomeIcon icon={faEnvelope} className="icon-style"/>
                <span>smart.academy@gmail.com</span>
              </div>
              <div className="d-flex align-items-center gap-3 my-3">
                <FontAwesomeIcon icon={faPhone} className="icon-style" />
                <span>+213 777 777 777</span>
              </div>
              <div className="d-flex align-items-center gap-3 my-3">
                <FontAwesomeIcon icon={faLocationDot} className="icon-style"/>
                <span>Somewhere</span>
              </div>
            </div>
          </div>
          <div className="flex-grow-1"></div>
          <div className="mx-3">
            <h6 className="fw-bold mb-3">Home</h6>
            <p className="text-black-50 mb-1">Benefits</p>
            <p className="text-black-50 mb-1">Our Courses</p>
            <p className="text-black-50 mb-1">Our Testimonials</p>
            <p className="text-black-50 mb-1">Our FAQ</p>
          </div>
          <div className="mx-3">
            <h6 className="fw-bold mb-3">About Us</h6>
            <p className="text-black-50 mb-1">Company</p>
            <p className="text-black-50 mb-1">Achievements</p>
            <p className="text-black-50 mb-1">Our Goals</p>
          </div>
          <div className="mx-3">
            <h6 className="fw-bold mb-3">Social Profiles</h6>
            <div className="social-profiles d-flex align-items-center gap-2">
              <i className="fa-brands fa-facebook btn white-btn fs-4" style={{
                background : "var(--background) !important"
              }}></i>
              <i className="fa-brands fa-instagram btn white-btn fs-4" style={{
                background : "var(--background) !important"
              }}></i>
              <i className="fa-brands fa-linkedin btn white-btn fs-4" style={{
                background : "var(--background) !important"
              }}></i>
            </div>
          </div>
        </div>
        <div className="border my-3"></div>
        <div className="text-center">
            <p className="text-black-50 my-0">© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
