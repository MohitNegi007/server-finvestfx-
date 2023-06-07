import mongoose from "mongoose";

const dishesSchema = mongoose.Schema({
  name: String,
  image: String,
  category: String,
  label: String,
  price: String,
  description: String,
});

const Dish = mongoose.model("dishes", dishesSchema);

export default Dish;
