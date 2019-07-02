import React, { Component } from "react";
import "./index.css";

class ShipCard extends Component {
  render() {
    const { ship_name, home_port, status, image, ship_id } = this.props.ship;

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
        <div className="card-header">Rocket Number - {ship_id}</div>
        <div className="card-body">
          <h5
            className="card-title card_title"
            style={{ textDecoration: "underline" }}
            onClick={this.props.handleClick}
          >
            Ship Name: {ship_name}
          </h5>
          <p className="card-text">Home Port: {home_port}</p>
          <p className="card-text">Status: {status || "Unknown"}</p>
          <p className="card-text" />
        </div>
      </div>
    );
  }
}

export default ShipCard;
