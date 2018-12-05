import TaskRepository from "../domain/task/taskRepository";
import Task from "../domain/task/task";
import { inject, injectable } from "inversify";

@injectable()
export default class GetAllTasks {
    private taskRepository: TaskRepository;

    constructor(@inject()taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public async get(): Promise<Array<Task>> {
        return this.taskRepository.findAll();
    };

}