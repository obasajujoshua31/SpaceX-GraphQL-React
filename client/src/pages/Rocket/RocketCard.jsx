import React, { Component } from "react";
import moment from "moment";
import ControlledCarousel from "../../components/Carousel";
import "./index.css";

class RocketCard extends Component {
  render() {
    const {
      rocket_id,
      rocket_name,
      cost_per_launch,
      first_flight,
      success_rate_pct,
      country,
      company,
      rocket_type,
      flickr_images,
      description,
    } = this.props.rocket;
    return (
      <div className="card">
        <ControlledCarousel
          images={flickr_images}
          rocket_name={rocket_name}
          description={description}
        />
        <div className="card-header">
          <p className="card-text">Rocket Number #{rocket_id}</p>
          <p className="card-text">Rocket type {rocket_type}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Mission Name: {rocket_name}</h5>
          <p className="card-text text-primary">Country {country}</p>
          <p className="card-text">Company {company}</p>
          <p className="card-text">Cost Per Launch {cost_per_launch}</p>
          <hr />
          <p className="card-text">Description {description}</p>
          <p className="card-text text-success">
            Success Rate {success_rate_pct}
          </p>
          <p className="card-text">
            First Flight: {moment(first_flight).format("LLLL")}
          </p>
        </div>
      </div>
    );
  }
}

export default RocketCard;
