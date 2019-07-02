import React, { Component } from "react";
import Template from "../../components/Layout/Template";
import "./index.css";

export class Home extends Component {
  render() {
    return (
      <Template>
        <h2 className="my-4 home-header">Welcome to SpaceX</h2>
        <img
          src="https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2016_-_06_crs8_landed2.jpg?itok=2-6ei7ER"
          alt=""
        />
      </Template>
    );
  }
}
