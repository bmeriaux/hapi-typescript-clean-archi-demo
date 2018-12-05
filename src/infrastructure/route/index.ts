import * as Hapi from "hapi";
import TasksRoute from "./tasksRoute";

export default function (server: Hapi.Server) {
    server.route(tasksRoute.buildRoutes());
}