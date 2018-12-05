import TaskRepository from "../domain/task/taskRepository";
import Task from "../domain/task/task";

export default class CreateTask {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public async create(newTask: Task): Promise<Task> {
        return this.taskRepository.create(newTask);
    };

}