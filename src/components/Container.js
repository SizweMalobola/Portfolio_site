import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "FFFFFF",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
