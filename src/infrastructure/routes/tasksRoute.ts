import TaskController from "../controllers/taskController";
import { ServerRoute } from "hapi";
import { RoutesBuilder } from "./routesBuilder";

export default class TasksRoute implements RoutesBuilder {
    private taskController: TaskController;

    constructor(taskController: TaskController) {
        this.taskController = taskController;
    }

    buildRoutes(): Array<ServerRoute> {
        return [
            {
                method: 'GET',
                path: '/api/tasks/{id}',
                handler: this.taskController.getTaskById(),
                config: {}
            },
            {
                method: 'GET',
                path: '/api/tasks',
                handler: taskController.getTasks(),
                config: {}
            },
            {
                method: 'PUT',
                path: '/api/tasks/{id}',
                handler: taskController.updateTask(),
                config: {}
            },
            {
                method: 'POST',
                path: '/api/tasks',
                handler: taskController.createTask(),
                config: {}
            }
        ];

    }
}