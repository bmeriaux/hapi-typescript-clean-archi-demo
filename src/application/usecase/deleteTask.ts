import TaskRepository from "../domain/task/taskRepository";
import Task from "../domain/task/task";

export default class DeleteTask {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public async delete(id: string): Promise<Task> {
        return this.taskRepository.delete(id);
    };

}