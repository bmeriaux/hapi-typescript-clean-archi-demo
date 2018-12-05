import { HapiPlugin } from "../hapiPlugin";
import * as Hapi from "hapi";

export default (): HapiPlugin => {
    return {
        register: async (server: Hapi.Server) => {
            await server.register([
                require('inert'),
                require('vision'),
                {
                    register: require('hapi-swagger'),
                    options: {
                        info: {
                            title: 'Task Api',
                            description: 'Simple Task Api.',
                            version: '1.0'
                        },
                        tags: [
                            {
                                'name': 'tasks',
                                'description': 'Api tasks interface.'
                            }
                        ],
                        enableDocumentation: true,
                        documentationPath: '/docs'
                    }
                }
            ]);
        },
        info: () => {
            return {
                name: "Swagger Documentation",
                version: "1.0.0"
            };
        }
    };
}