import Joi from "joi";

export function validateFormikUsingJoi(schemaObject) {
  return function validate(values) {
    const schema = Joi.object(schemaObject);
<<<<<<< HEAD
=======

>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
    const { error } = schema.validate(values, { abortEarly: false });
    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
<<<<<<< HEAD
      let key = detail.path[0]
      if (detail.path.length > 1){
        key = detail.path[1]
      }
      errors[key] = detail.message;
    }
=======
      const key = detail.path[0];
      errors[key] = detail.message;
    }

>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
    return errors;
  };
}
