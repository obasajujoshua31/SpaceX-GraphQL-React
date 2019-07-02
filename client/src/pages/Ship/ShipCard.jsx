import React, { Component } from "react";
import "./index.css";

class ShipCard extends Component {
  render() {
    const {
      ship_id,
      ship_name,
      ship_type,
      ship_model,
      status,
      weight_lbs,
      image,
      home_port,
    } = this.props.ship;
    return (
      <div className="card">
        <img
          src={
            image ||
            "https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2016_-_06_crs8_landed2.jpg?itok=2-6ei7ER"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-header">
          <p className="card-text">Ship Type: {ship_type}</p>
          <p className="card-text">Ship Number #{ship_id}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ship Name: {ship_name}</h5>
          <p className="card-text">
            Ship Model: {ship_model || "Unknown Model"}
          </p>
          <p className="card-text text-secondary">Status: {status}</p>
          <p className="card-text">Weight : {weight_lbs}</p>
          <p className="card-text">Home Port: {home_port}</p>
        </div>
      </div>
    );
  }
}

export default ShipCard;
