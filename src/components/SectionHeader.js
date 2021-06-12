import React from "react";

function SectionHeader({ subtitle, title }) {
  return (
    <div>
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          marginBottom: "1.6rem",
          color: "#8e8a8f",
        }}
      >
        {subtitle.toUpperCase()}
      </h3>
      <h1
        style={{
          fontSize: "5rem",
          lineHeight: "4.8rem",
          marginBottom: "1.6rem",
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default SectionHeader;
