import { IEntity } from "../entity";

class Task implements IEntity {
    private _name: string;
    private _description: string;
    private _completed: boolean;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get completed(): boolean {
        return this._completed;
    }

    set completed(value: boolean) {
        this._completed = value;
    }

    get _id(): string {
        return this._id;
    }

    set _id(value: string) {
        this._id = value;
    }

    get createdDate(): Date {
        return this.createdDate;
    }

    set createdDate(value: Date) {
        this.createdDate = value;
    }

    get updatedDate(): Date {
        return this.updatedDate;
    }

    set updatedDate(value: Date) {
        this.updatedDate = value;
    }
}

export default Task;