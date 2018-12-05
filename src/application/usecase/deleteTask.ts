import TaskRepository from "../domain/task/taskRepository";
import Task from "../domain/task/task";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";

@provide("DeleteTask")
export default class DeleteTask {
    private taskRepository: TaskRepository;

    constructor(@inject("TaskRepository")taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public async delete(id: string): Promise<Task> {
        return this.taskRepository.delete(id);
    };

}