import * as Joi from "joi";

export const JoiConfigObject = Joi.object({
    NODE_ENV: Joi.string().valid('development','production')
              .default('development'),
    PORT: Joi.number().default(3005),
});
