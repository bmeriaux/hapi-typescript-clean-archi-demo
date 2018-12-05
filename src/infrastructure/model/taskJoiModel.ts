import * as Joi from "joi";

export const createTaskModel = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required()
});

export const updateTaskModel = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    completed: Joi.boolean()
});

export const taskJoiModel = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    completed: Joi.boolean(),
    createdDate: Joi.date(),
    updatedDate: Joi.date()
}).label("Task Model").description("Json body that represents a task.");