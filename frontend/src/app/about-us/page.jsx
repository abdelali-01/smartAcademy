import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import React from "react";

const achievements = [
  {
    _id: 0,
    title: "Trusted by Thousands",
    description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    icon: "/icons/crown.fill.svg",
  },
  {
    _id: 1,
    title: "Trusted by Thousands",
    description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    icon: "/icons/medal.fill.svg",
  },
  {
    _id: 2,
    title: "Trusted by Thousands",
    description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    icon: "/icons/Objects & Tools.svg",
  },
  {
    _id: 3,
    title: "Trusted by Thousands",
    description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    icon: "/icons/bolt.shield.fill.svg",
  },
];

export default function AboutUs() {
  return (
    <div className="aboutUs-page container my-5">
      <div className="head-page d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <h1 className="fw-bold w-50">About Smart Academy</h1>
        <p className="text-black-50" style={{ maxWidth: "500px" }}>
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <div className="border mt-3"></div>

      <About
        title={"Achievements"}
        description={
          "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
        }
        items={achievements}
      />

      <About
        title={"Our Goals"}
        description={
          "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"
        }
        items={achievements}
      />

      <JoinNow />
    </div>
  );
}
