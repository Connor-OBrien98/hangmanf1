import React from "react";

function HangmanDrawing({ mistakeCount }) {
  const HEAD = (
    <div
      style={{
        position: "absolute",
        height: "50px",
        width: "50px",
        border: "10px solid black",
        right: -30,
        top: 30,
        borderRadius: "100%",
      }}
    ></div>
  );
  const BODY = (
    <div
      style={{
        position: "absolute",
        height: "120px",
        width: "10px",
        background: "black",
        top: 90,
      }}
    ></div>
  );
  const RIGHT_ARM = (
    <div
      style={{
        position: "absolute",
        height: "70px",
        width: "10px",
        background: "black",
        top: 90,
        left: 28,
        transform: "rotate(60deg)",
      }}
    ></div>
  );
  const LEFT_ARM = (
    <div
      style={{
        position: "absolute",
        height: "70px",
        width: "10px",
        background: "black",
        top: 90,
        right: 28,
        transform: "rotate(300deg)",
      }}
    ></div>
  );
  const RIGHT_LEG = (
    <div
      style={{
        position: "absolute",
        height: "72px",
        width: "10px",
        background: "black",
        top: 203,
        left: 18,
        transform: "rotate(148deg)",
      }}
    ></div>
  );
  const LEFT_LEG = (
    <div
      style={{
        position: "absolute",
        height: "72px",
        width: "10px",
        background: "black",
        top: 203,
        right: 18,
        transform: "rotate(212deg)",
      }}
    ></div>
  );

  const currentDrawing = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: "180px",
          height: "10px",
          marginLeft: "125px",
          background: "black",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "40px",
            background: "black",
            right: 0,
          }}
        >
          {currentDrawing.slice(0, mistakeCount)}
        </div>
      </div>
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "125px",
        }}
      ></div>
      <div
        style={{
          width: "250px",
          height: "10px",
          background: "black",
        }}
      ></div>
    </div>
  );
}

export default HangmanDrawing;
