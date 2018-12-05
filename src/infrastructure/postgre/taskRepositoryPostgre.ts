import TaskRepository from "../../application/domain/task/taskRepository";
import Task from "../../application/domain/task/task";
import { provide } from "inversify-binding-decorators";

@provide("TaskRepository")
export default class TaskRepositoryPostgre implements TaskRepository {
    create(entity: Task): Promise<Task> {
        return Promise.resolve(new Task());
    }

    delete(id: string): Promise<Task> {
        return Promise.resolve(new Task());
    }

    findAll(): Promise<Array<Task>> {
        return Promise.resolve([new Task()]);
    }

    findById(id: string): Promise<Task> {
        return Promise.resolve(new Task());
    }

    update(id: string, entity: Task): Promise<Task> {
        return Promise.resolve(new Task());
    }

}