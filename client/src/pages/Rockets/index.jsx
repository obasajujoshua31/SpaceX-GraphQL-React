import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import Template from "../../components/Layout/Template";
import Loader from "../../components/Loader";
import RocketCard from "./RocketCard";
import MissionKey from "./MissionKey";
import { getRockets } from "../../queries";
import "./index.css";

class Rockets extends Component {
  handleClick = rocket_id => {
    this.props.history.push(`rocket/${rocket_id}`);
  };

  render() {
    return (
      <Template>
        <div className="container">
          <h3 className="launches-header">Rockets</h3>
          <MissionKey />
          <div className="launches-container">
            <Query query={getRockets}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />;

                if (error) return <div>Error :(</div>;

                if (data.rockets)
                  return data.rockets.map(rocket => (
                    <RocketCard
                      rocket={rocket}
                      key={rocket.rocket_id}
                      handleClick={() => this.handleClick(rocket.rocket_id)}
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

export default withRouter(Rockets);
