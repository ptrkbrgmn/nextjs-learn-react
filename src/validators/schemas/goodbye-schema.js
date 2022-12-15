import Joi from "joi";

const goodbyeSchema = Joi.object({ name: Joi.string().min(3).max(10).required() });
export default goodbyeSchema;
