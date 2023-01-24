import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const shcema = Joi.object({
  image: Joi.string().required(),
  name: Joi.string().required(),
  year: Joi.number()
    .required()
    .min(1886)
    .max(new Date().getFullYear() + 2),
  numberOfSeats: Joi.number().max(1000).min(1).required(),
  features: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  miles: Joi.number().required().min(0),
  price: Joi.number().required().min(0),
  listerId: Joi.string().required(),
  city: Joi.string().min(2).required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = await shcema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  const {
    image,
    name,
    year,
    numberOfSeats,
    features,
    description,
    miles,
    price,
    listerId,
    city,
    make,
    model,
  } = body;

  const car = await prisma.car.create({
    data: {
      image,
      name,
      year,
      numberOfSeats,
      features,
      description,
      miles,
      price,
      listerId,
      city: city.toLowerCase(),
      make,
      model,
    },
  });

  return car;
});
