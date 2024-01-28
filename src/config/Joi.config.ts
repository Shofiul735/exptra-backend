import * as Joi from "joi";

export const JoiConfigObject = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test')
              .default('development'),
    PORT: Joi.number().default(3005),
    JWT_SECRET: Joi.string().required()
});