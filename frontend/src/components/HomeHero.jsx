"use client";
import { motion } from "framer-motion";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeHero() {
  return (
    <div className="mt-5 pb-5 hero-section d-flex flex-column align-items-center ">
      <motion.div
        initial={{ opacity: 0, y: -200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, delay: 0.2 }} 
        viewport={{ once: false }} 
      >
        <div
          className="p-2 pe-3 d-flex align-items-center gap-3 rounded-2 my-3"
          style={{
            background: "var(--boxes)",
            border: "1px solid var(--borders)",
          }}
        >
          <div
            className="rounded-2 p-3 bolt-icon position-relative"
            style={{
              background: "var(--icons)",
            }}
          >
            <FontAwesomeIcon icon={faBolt} width={21} />

            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 className="my-0 fw-bold">
            <span
              className="fw-bold"
              style={{
                color: "var(--btns)",
              }}
            >
              Unlock
            </span>{" "}
            Your Creative Potential
          </h2>
        </div>
      </motion.div>
      <h3>with Online Design and Development Courses.</h3>
      <p>Learn from Industry Experts and Enhance Your Skills.</p>

      <div className="hero-cta mt-4 d-flex align-items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 , x : 400}} 
          whileInView={{ opacity: 1, y: 0 , x : 0}} 
          transition={{ duration: 1, delay: 0.2 }} 
          viewport={{ once: false }} 
        >
          <button className="btn me-4 blue-btn">Explore Courses</button>
        </motion.div>
        <button className="btn white-btn">View Pricing</button>
      </div>
    </div>
  );
}
