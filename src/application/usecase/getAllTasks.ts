import TaskRepository from "../domain/task/taskRepository";
import Task from "../domain/task/task";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";

@provide("GetAllTasks")
export default class GetAllTasks {
    private taskRepository: TaskRepository;

    constructor(@inject("TaskRepository")taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public async get(): Promise<Array<Task>> {
        return this.taskRepository.findAll();
    };

}