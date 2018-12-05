import { HapiPlugin } from "../hapiPlugin";
import * as Hapi from "hapi";

export default (): HapiPlugin => {
    return {
        register: async (server: Hapi.Server) => {
            try {
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
            } catch (error) {
                console.error(error);
            }
        },
        info: () => {
            return {
                name: "Swagger Documentation",
                version: "1.0.0"
            };
        }
    };
}