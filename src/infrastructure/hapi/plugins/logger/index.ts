import { HapiPlugin } from "../hapiPlugin";
import * as Hapi from "hapi";

export default (): HapiPlugin => {
    return {
        register: async (server: Hapi.Server) => {
            const opts = {
                opsInterval: 1000,
                reporters: [{
                    reporter: require('good-console'),
                    events: {error: '*', log: '*', response: '*', request: '*'}
                }]
            };

            await server.register({
                plugin: require('good'),
                options: opts
            });
        },
        info: () => {
            return {
                name: "Good Logger",
                version: "1.0.0"
            };
        }
    };
};