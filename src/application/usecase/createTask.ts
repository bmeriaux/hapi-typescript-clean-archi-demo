import Task from "../domain/task/task";
import TaskRepository from "../domain/task/taskRepository";

export  interface CreateTask {
    create(newTask: Task): Promise<Task>;
}

export default function func(taskRepository: TaskRepository): CreateTask {
    return {
        create: async (newTask: Task) => taskRepository.create(newTask)
    };
}