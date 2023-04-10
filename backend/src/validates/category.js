import joi from "joi";

const schemaDefine = {
  name: joi.string().required().min(1),
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
