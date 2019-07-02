import { gql } from "apollo-boost";

const getLaunches = gql`
  {
    launches {
      mission_name
      launch_success
      flight_number
      launch_year
      launch_date_local
    }
  }
`;

const getSingleLaunch = gql`
  query launch($id: ID) {
    launch(id: $id) {
      mission_name
      launch_success
      flight_number
      launch_year
      launch_date_local
      rocket {
        rocket_name
        rocket_id
        rocket_type
      }
    }
  }
`;

const getRockets = gql`
  {
    rockets {
      rocket_id
      rocket_name
      cost_per_launch
      country
      description
      success_rate_pct
      first_flight
      flickr_images
      stages
      active
    }
  }
`;

const getShips = gql`
  {
    ships {
      ship_id
      ship_name
      ship_type
      ship_model
      status
      weight_lbs
      url
      image
      home_port
    }
  }
`;

const getSingleShip = gql`
  query($ship_id: ID) {
    ship(ship_id: $ship_id) {
      ship_id
      ship_name
      ship_type
      ship_model
      status
      weight_lbs
      url
      image
      home_port
    }
  }
`;

const getSingleRocket = gql`
  query rocket($rocket_id: ID) {
    rocket(rocket_id: $rocket_id) {
      rocket_id
      rocket_name
      cost_per_launch
      country
      description
      success_rate_pct
      first_flight
      flickr_images
      stages
      active
    }
  }
`;

export {
  getLaunches,
  getSingleLaunch,
  getRockets,
  getSingleRocket,
  getShips,
  getSingleShip,
};
