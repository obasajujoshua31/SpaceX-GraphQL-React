import React, { Component } from "react";
import moment from "moment";
import classNames from "classnames";
import "./index.css";

class LaunchCard extends Component {
  render() {
    const cardClass = classNames({
      card: true,
      "launch-success": this.props.launchSuccess,
    });
    return (
      <div className={cardClass}>
        <div className="card-header">
          flight Number #{this.props.data.flight_number}
        </div>
        <div className="card-body">
          <h5
            className="card-title card_title"
            style={{ textDecoration: "underline" }}
            onClick={this.props.handleClick}
          >
            Mission: {this.props.data.mission_name}
          </h5>
          <p className="card-text">
            Date: {moment(this.props.data.launch_date_local).format("LLLL")}
          </p>
        </div>
      </div>
    );
  }
}

export default LaunchCard;
