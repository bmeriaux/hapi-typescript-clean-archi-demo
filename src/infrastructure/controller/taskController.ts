import * as Hapi from "hapi";
import * as Boom from "boom";
import Task from "../../application/domain/task/task";
import DeleteTask from "../../application/usecase/deleteTask";
import GetAllTasks from "../../application/usecase/getAllTasks";
import { CreateTask } from "../../application/usecase/createTask";


export default class TaskController {
    private createTask: CreateTask;
    private deleteTask: DeleteTask;
    private getAllTasks: GetAllTasks;

    constructor(createTask: CreateTask, getAllTasks: GetAllTasks, deleteTask: DeleteTask) {
        this.createTask = createTask;
        this.getAllTasks = getAllTasks;
        this.deleteTask = deleteTask;
    }

    public async create(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const newTask: Task = request.payload as Task;
        try {
            const createdTask = await this.createTask.create(newTask);
            return h.response(createdTask).code(201);
        } catch (error) {
            return h.response(Boom.badImplementation(error));
        }
    }

    public async delete(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const id = request.params["id"];
        try {
            await this.deleteTask.delete(id);
            return h.response().code(204);
        } catch (error) {
            return h.response(Boom.badImplementation(error));
        }

    }

    public async getAll(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        try {
            const tasks = await this.getAllTasks.get();
            return h.response(tasks);
        } catch (error) {
            return h.response(Boom.badImplementation(error));
        }
    }
}