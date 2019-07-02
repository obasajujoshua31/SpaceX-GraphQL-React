const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const { URL } = require("../constants");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLID },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    launch_date_local: { type: GraphQLString },
    rocket: {
      type: RocketType,
      resolve(parent, args) {
        return axios
          .get(`${URL}/rockets/${parent.rocket.rocket_id}`)
          .then(res => res.data);
      },
    },
  }),
});

const ShipType = new GraphQLObjectType({
  name: "Ship",
  fields: () => ({
    ship_id: { type: GraphQLString },
    ship_name: { type: GraphQLString },
    ship_model: { type: GraphQLString },
    ship_type: { type: GraphQLString },
    role: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    weight_lbs: { type: GraphQLInt },
    year_built: { type: GraphQLInt },
    home_port: { type: GraphQLString },
    status: { type: GraphQLString },
    url: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLID },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    description: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt },
    stages: { type: GraphQLInt },
    success_rate_pct: { type: GraphQLInt },
    flickr_images: { type: new GraphQLList(GraphQLString) },
    active: { type: GraphQLBoolean },
    first_flight: { type: GraphQLString },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    launch: {
      type: LaunchType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return axios.get(`${URL}/launches/${args.id}`).then(res => res.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return axios
          .get(`${URL}/rockets/${args.rocket_id}`)
          .then(res => res.data);
      },
    },

    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get(`${URL}/launches`).then(res => res.data);
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get(`${URL}/rockets`).then(res => res.data);
      },
    },

    ship: {
      type: ShipType,
      args: {
        ship_id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return axios.get(`${URL}/ships/${args.ship_id}`).then(res => res.data);
      },
    },
    ships: {
      type: new GraphQLList(ShipType),
      resolve(parent, args) {
        return axios.get(`${URL}/ships`).then(res => res.data);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
