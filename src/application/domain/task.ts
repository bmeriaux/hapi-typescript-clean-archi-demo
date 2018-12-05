import { IEntity } from "./entity";

interface Task extends IEntity {
    name: string;
    description: string;
    completed: boolean;
}

export default Task;