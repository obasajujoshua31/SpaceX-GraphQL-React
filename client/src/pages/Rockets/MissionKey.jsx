import React, { Fragment } from "react";
import "./index.css";

export default () => {
  return (
    <Fragment>
      <h6
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px 5px",
        }}
      >
        Key
      </h6>
      <div className="launches-key">
        <div className="launches-success">
          <span className="launches-success-text">Active</span>
          <span className="success-key" />
        </div>
        <div className="launches-failure">
          <span className="launches-failure-text">Not Active</span>
          <span className="failure-key" />
        </div>
      </div>
    </Fragment>
  );
};
