import TaskController from "../controller/taskController";
import { ServerRoute } from "hapi";
import { RoutesBuilder } from "./routesBuilder";
import * as TaskModel from "../model/taskJoiModel";
import * as Joi from "joi";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";

@provide("RoutesBuilder")
export default class TasksRoute implements RoutesBuilder {
    private taskController: TaskController;

    constructor(@inject("TaskController")taskController: TaskController) {
        this.taskController = taskController;
    }

    buildRoutes(): Array<ServerRoute> {
        return [
            /*{
                method: 'GET',
                path: '/api/tasks/{id}',
                handler: this.taskController.getById,
                options: {
                    tags: ['api', 'tasks'],
                    description: 'Get task by id.',
                    validate: {
                        params: {
                            id: Joi.string().required()
                        }
                    },
                    response: {
                        schema: TaskModel.taskJoiModel
                    },
                    plugins: {
                        'hapi-swagger': {
                            responses: {
                                '200': {
                                    'description': 'Task founded.'
                                },
                                '404': {
                                    'description': 'Task does not exists.'
                                }
                            }
                        }
                    }
                }
            },*/
            {
                method: "GET",
                path: "/api/tasks",
                handler: this.taskController.getAll,
                options: {
                    tags: ["api", "tasks"],
                    description: "Get all tasks.",
                    validate: {
                        query: {
                            top: Joi.number().default(5),
                            skip: Joi.number().default(0)
                        }
                    },
                    plugins: {
                        "hapi-swagger": {
                            responses: {
                                "200": {
                                    "description": "Returned Tasks.",
                                    "schema": TaskModel.taskJoiModel
                                }
                            }
                        }
                    }
                }
            },
            {
                method: "POST",
                path: "/api/tasks",
                handler: this.taskController.create,
                options: {
                    tags: ["api", "tasks"],
                    description: "Create a task.",
                    validate: {
                        payload: TaskModel.createTaskModel
                    },
                    plugins: {
                        "hapi-swagger": {
                            responses: {
                                "201": {
                                    "description": "Created Task.",
                                    "schema": TaskModel.taskJoiModel
                                }
                            }
                        }
                    }
                }
            },
            {
                method: "DELETE",
                path: "/api/tasks/{id}",
                handler: this.taskController.delete,
                options: {
                    tags: ["api", "tasks"],
                    description: "Delete task by id.",
                    validate: {
                        params: {
                            id: Joi.string().required()
                        }
                    },
                    response: {
                        schema: TaskModel.taskJoiModel
                    },
                    plugins: {
                        "hapi-swagger": {
                            responses: {
                                "204": {
                                    "description": "Deleted Task."
                                },
                                "404": {
                                    "description": "Task does not exists."
                                }
                            }
                        }
                    }
                }
            }
        ];

    }
}