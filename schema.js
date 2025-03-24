const Joi = require("joi"); //joi is a npm package to validate schema

module.exports.listingSchema = Joi.object({
listing: Joi.object({
title: Joi.string().required(),
description: Joi.string().required(),
location: Joi.string().required(),
country: Joi.string().required(),
price: Joi.number().required().min(0),
image: Joi.string().allow("", null),
}).required(),
});

//reviewSchema validation
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().required().min(12),
        rating: Joi.number().required().min(1).max(5),
    }).required(),
});

