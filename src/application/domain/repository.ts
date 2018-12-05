import { IEntity } from "./entity";

export interface IRepository<T extends IEntity> {
    findAll(): Promise<Array<T>>;

    findById(id: string): Promise<T>;

    delete(id: string): Promise<T>;

    update(id: string, entity: T): Promise<T>;

    create(entity: T): Promise<T>;
}