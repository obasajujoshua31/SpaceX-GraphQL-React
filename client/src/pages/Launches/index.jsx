import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import Template from "../../components/Layout/Template";
import Loader from "../../components/Loader";
import LaunchCard from "./LaunchCard";
import MissionKey from "./MissionKey";
import { getLaunches } from "../../queries";
import "./index.css";

class Launches extends Component {
  handleClick = flight_number => {
    this.props.history.push(`launch/${flight_number}`);
  };

  render() {
    return (
      <Template>
        <div className="container">
          <h3 className="launches-header">Launches</h3>
          <MissionKey />
          <div className="launches-container">
            <Query query={getLaunches}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />;

                if (error) return <div>Error :(</div>;

                if (data.launches)
                  return data.launches.map(launch => (
                    <LaunchCard
                      launchSuccess={launch.launch_success}
                      data={launch}
                      key={launch.flight_number}
                      handleClick={() => this.handleClick(launch.flight_number)}
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

export default withRouter(Launches);
