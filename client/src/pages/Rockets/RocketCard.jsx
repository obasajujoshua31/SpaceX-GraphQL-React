import React, { Component } from "react";
import moment from "moment";
import classNames from "classnames";
import "./index.css";

class RocketCard extends Component {
  render() {
    const cardClass = classNames({
      card: true,
      "launch-success": this.props.rocket.active,
    });
    const { rocket_id, rocket_name, country, first_flight } = this.props.rocket;

    return (
      <div className={cardClass}>
        <div className="card-header">Rocket Number - {rocket_id}</div>
        <div className="card-body">
          <h5
            className="card-title card_title"
            style={{ textDecoration: "underline" }}
            onClick={this.props.handleClick}
          >
            Rocket Name: {rocket_name}
          </h5>
          <p className="card-text">Country: {country}</p>
          <p className="card-text">
            First Flight: {moment(first_flight).format("LLLL")}
          </p>
        </div>
      </div>
    );
  }
}

export default RocketCard;
