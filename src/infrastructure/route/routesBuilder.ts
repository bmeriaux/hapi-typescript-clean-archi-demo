import { ServerRoute } from "hapi";

export interface RoutesBuilder {
    buildRoutes(): Array<ServerRoute>;
}