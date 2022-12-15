import Joi from "joi";

const helloSchema = Joi.object({ name: Joi.string().min(3).max(20).required() });
export default helloSchema;
