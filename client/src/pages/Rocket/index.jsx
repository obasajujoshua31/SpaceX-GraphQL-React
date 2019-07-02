import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import Template from "../../components/Layout/Template";
import Loader from "../../components/Loader";
import RocketCard from "./RocketCard";
import { getSingleRocket } from "../../queries";
import "./index.css";

class Rocket extends Component {
  render() {
    return (
      <Template>
        <div className="container">
          <Query
            query={getSingleRocket}
            variables={{
              rocket_id: this.props.match.params.rocket_id,
            }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <div>Error </div>;

              if (data.rocket)
                return (
                  <div>
                    <h3 className="launches-header">
                      {data.rocket.rocket_name}
                    </h3>
                    <div className="launch-container">
                      <RocketCard rocket={data.rocket} />
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

export default withRouter(Rocket);
