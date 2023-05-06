import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
    DATABASE_URI: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(7),
})