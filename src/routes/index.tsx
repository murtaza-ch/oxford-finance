import { Screen } from "../containers";

const routes = [
  {
    id: 1,
    path: "/screen/:screenId",
    exact: true,
    component: Screen,
  },
];

export default routes;
