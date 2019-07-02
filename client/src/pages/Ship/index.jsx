import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import Template from "../../components/Layout/Template";
import Loader from "../../components/Loader";
import ShipCard from "./ShipCard";
import { getSingleShip } from "../../queries";
import "./index.css";

class Ship extends Component {
  render() {
    return (
      <Template>
        <div className="container">
          <Query
            query={getSingleShip}
            variables={{
              ship_id: this.props.match.params.ship_id,
            }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <div>Error </div>;

              if (data.ship)
                return (
                  <div>
                    <h3 className="launches-header">{data.ship.ship_name}</h3>
                    <div className="launch-container">
                      <ShipCard ship={data.ship} />
                    </div>
                  </div>
                );
            }}
          </Query>
        </div>
      </Template>
    );
  }
}

export default withRouter(Ship);
