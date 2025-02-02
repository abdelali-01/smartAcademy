import React from "react";

export default function Loader() {
  return (
    <div className="d-flex align-items-center justify-content-center my-5">
      <div
        className="spinner-grow "
        role="status"
        style={{
          color: "var(--btns) !important",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
