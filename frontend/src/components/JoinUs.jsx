
export default function JoinUs() {
  return (
    <div
      className="join-us rounded-4 py-5 px-2 my-5 text-center position-relative"
      style={{
        boxShadow: "0 16px 40px #B2D8FC",
      }}
    >
        <div className="left-gradient position-absolute rounded-4"
        style={{
            width : "100%" ,
            height : "100%",
            top : "0",
            left : "0" ,
            zIndex : "-10"
        }}
        ></div>
      <div
        className="content m-auto py-3"
        style={{
          maxWidth: "600px",
        }}
      >
        <h2 className="fw-bold">Join ambitious professionals and unlock your dream career today</h2>
        <p>
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
        <div className="cta-join d-flex flex-wrap align-items-center gap-2 justify-content-center">
          <div className="input bg-white rounded-5 py-3 ps-4 d-flex align-items-center" style={{
            border : "1px solid var(--borders)" ,
          }}>
            <img src="/icons/envelope-regular.svg" alt="" width={"20"}/>
            <input type="email" placeholder="Your mail address" style={{
                background : "transparent" ,
                border : "none" ,
                outline : "none",
                padding : "0 10px" ,
                flexGrow : "1"
            }}/>
          </div>
          <button className="btn blue-btn rounded-5 fw-bold px-5 py-3">Join Us</button>
        </div>
      </div>
    </div>
  );
}
