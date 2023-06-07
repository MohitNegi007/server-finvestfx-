import Dish from "../model/dishes.js";

export const getDishes = async (request, response) => {
  try {
    const dishes = await Dish.find();
    response.status(200).json(dishes);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addDishes = async (request, response) => {
  const dish = request.body;
  const newDish = new Dish(dish);
  try {
    await newDish.save();
    response.status(201).json(newDish);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
