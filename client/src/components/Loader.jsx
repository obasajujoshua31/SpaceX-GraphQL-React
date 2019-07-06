import React from "react";

export default () => {
  return (
    <div
      className="spinner-border"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
