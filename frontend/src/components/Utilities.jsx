import { outils } from "@/data";
import React from "react";

export default function Utilities() {
  return (
    <div
      className="utilities px-5 py-2 rounded-2 my-5"
      style={{
        background: "var(--boxes)",
        border: "1px solid var(--borders)",
      }}
    >
      <div className="outils d-flex justify-content-between align-items-center">
        {outils.map((outil, i) => {
          return (
            <>
              <div className="m-4" key={outil._id}>
                <img src={outil.img} alt="" />
              </div>
              {i === outils.length - 1 ? (
                <></>
              ) : (
                <div
                  style={{
                    border: "1px solid var(--borders)",
                    height: "60px",
                  }}
                ></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
