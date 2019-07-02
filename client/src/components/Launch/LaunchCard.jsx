import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./index.css";

class LaunchCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Flight Number #{this.props.launch.flight_number}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Mission Name: {this.props.launch.mission_name}
          </h5>
          <p className="card-text">
            Date: {moment(this.props.launch.launch_date_local).format("LLLL")}
          </p>
          <p className="card-text">
            <Link to="#">
              Rocket Name: {this.props.launch.rocket.rocket_name}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LaunchCard;
