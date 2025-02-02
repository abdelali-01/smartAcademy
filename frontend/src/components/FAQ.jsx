"use client";

import { faq } from "@/data";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FAQ() {
  return (
    <div className="faq rounded-2 p-5 bg-white d-flex gap-5 flex-wrap">
      <div
        className="left-faq"
        style={{
          maxWidth: "400px",
        }}
      >
        <h2>Frequently Asked Questions</h2>
        <p className="text-black-50">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
      </div>
      <div className="right-faq flex-grow-1 w-50">
        {faq.map((q) => {
          return <FaqItem key={q._id} question={q} />;
        })}
      </div>
    </div>
  );
}

function FaqItem({ question }) {
  const [isDisplay, setIsDisplay] = useState(false);
  
  return (
    <div className="border rounded-2 py-4 px-5 mb-3">
      <div className="head-item d-flex align-items-center justify-content-between">
        <h6 className="my-0">{question.question}</h6>
        <div
          onClick={() => setIsDisplay(!isDisplay)}
          role="button"
          className="icon py-2 px-3 rounded-2"
          style={{
            background: "var(--icons)",
          }}
        >
          {isDisplay ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </div>
      </div>
      <div
        className={`body-item `}
        style={{
          maxHeight : `${!isDisplay ? "0px" : "300px"}` ,
          overflowY: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div className="border mt-3 mb-5"></div>
        <p className="text-black-50">{question.answer}</p>
      </div>
    </div>
  );
}
