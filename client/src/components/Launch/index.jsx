import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import Template from "../../components/Layout/Template";
import Loader from "../../components/Loader";
import LaunchCard from "./LaunchCard";
import { getSingleLaunch } from "../../queries";
import "./index.css";

class Launch extends Component {
  render() {
    return (
      <Template>
        <div className="container">
          <Query
            query={getSingleLaunch}
            variables={{
              id: this.props.match.params.id,
            }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <div>Error </div>;

              if (data.launch)
                return (
                  <div>
                    <h3 className="launches-header">
                      {data.launch.mission_name}
                    </h3>
                    <div className="launch-container">
                      <LaunchCard launch={data.launch} />
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

export default withRouter(Launch);
