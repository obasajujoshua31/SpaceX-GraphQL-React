import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import Template from "../../components/Layout/Template";
import Loader from "../../components/Loader";
import ShipCard from "./ShipCard";
import { getShips } from "../../queries";
import "./index.css";

class Ships extends Component {
  handleClick = ship_id => {
    this.props.history.push(`ship/${ship_id}`);
  };

  render() {
    return (
      <Template>
        <div className="container">
          <h3 className="launches-header">Ships</h3>
          <div className="launches-container">
            <Query query={getShips}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />;

                if (error) return <div>Error :(</div>;

                if (data.ships)
                  return data.ships.map(ship => (
                    <ShipCard
                      ship={ship}
                      key={ship.ship_id}
                      handleClick={() => this.handleClick(ship.ship_id)}
                    />
                  ));
              }}
            </Query>
          </div>
        </div>
      </Template>
    );
  }
}

export default withRouter(Ships);
