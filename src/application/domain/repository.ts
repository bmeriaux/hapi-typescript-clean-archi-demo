import {IEntity} from "../../application/domain/entity";

export interface IRepository<T extends IEntity> {
    findById(id: string): Promise<T>;

    findByIdAndDelete(id: string): Promise<T>;

    findByIdAndUpdate(id: string, entity: T): Promise<T>;

    find(filter: Object, top?: number, skip?: number): Promise<Array<T>>;

    create(entity: T): Promise<T>;
}