const Joi = require("joi");

const SearchTextSchema = Joi.object({
  text: Joi.string().required(),
});

module.exports = {
  SearchTextSchema,
};
