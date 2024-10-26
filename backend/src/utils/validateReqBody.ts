import Joi from "joi";
import { RequestHandler } from "express";

const newNoteSchema = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().optional(),
});

export const validateNewNote: RequestHandler = (req, res, next) => {
  const { error } = newNoteSchema.validate(req.body); // Use .validate() method

  if (error) {
    return res.status(400).json({
      message: "Request body doesn't conform to schema",
      error: error.details,
    });
  }

  next();
};
