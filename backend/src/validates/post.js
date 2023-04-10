import joi from "joi";

const schemaDefine = {
  title: joi.string().required().min(1),
  description: joi.string().required().min(1),
  handle: joi.string().required().min(1),
  publish: joi.boolean().required(),
  status: joi.string().required(),
  thumbnail: joi.string().required(),
  images: joi.array().required().items(joi.string().required()),
  categoryId: joi.number().required()
};

export default {
  create: (req, res, next) => {
    const schema = req.body.length ? joi.array().items(joi.object(schemaDefine)): joi.compile(schemaDefine);
    const { error } = schema.validate(req.body);
    
    next(error);
  },
  update: (req, res, next) => {
    const schema = {};
    Object.keys(req.body).forEach((key) => (schema[key] = schemaDefine[key]));
    const { error } = joi.object(schema).validate(req.body);

    next(error);
  },
};
