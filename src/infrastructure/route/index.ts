import * as Hapi from "hapi";
import { RoutesBuilder } from "./routesBuilder";
import inversifyContainer from "../ioc/inversifyContainer";


export default function (server: Hapi.Server) {
    const routesBuilders = inversifyContainer.getAll<RoutesBuilder>("RoutesBuilder");
    routesBuilders.forEach((routesBuilder: RoutesBuilder) => server.route(routesBuilder.buildRoutes()));
}