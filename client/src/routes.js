import * as component from "./pages";

export default [
  {
    path: "/",
    exact: true,
    component: component.Home,
  },
  {
    path: "/launches",
    component: component.Launches,
  },
  {
    path: "/launch/:id",
    component: component.Launch,
  },
  {
    path: "/ships",
    component: component.Ships,
  },
  {
    path: "/ship/:ship_id",
    component: component.Ship,
  },
  {
    path: "/rockets",
    component: component.Rockets,
  },
  {
    path: "/rocket/:rocket_id",
    component: component.Rocket,
  },
  {
    path: "*",
    component: component.NotFound,
  },
];
